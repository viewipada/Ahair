const { admin, db } = require("../util/admin");

const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const { validateSignupData, validateLoginData } = require("../util/validators");

exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
    name: req.body.name,
    phoneNum: req.body.phoneNum,
    userGender: req.body.userGender
  };
  
  const noImg = 'no-Img.png';

  let token, userId;
  db.doc(`/users/${newUser.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({ handle: "this handle is already taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCridentials = {
        handle: newUser.handle,
        email: newUser.email,
        name: newUser.name,
        phoneNum: newUser.phoneNum,
        userGender: newUser.userGender,
        createAt: new Date().toISOString(),
        imgUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
        userId,
      };
      return db.doc(`/users/${newUser.handle}`).set(userCridentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email is already is use" });
      } else {
        return res.status(500).json({ error: err.code });
      }
    });
};

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  let loginData = {};
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      loginData.token = token;

      admin
        .auth()
        .verifyIdToken(token)
        .then(async (decodedToken) => {
          tkData = decodedToken;
          console.log(decodedToken);

          try {
            const doc = await db
              .collection("shops")
              .where("shopId", "==", tkData.uid)
              .get();
            if (!doc.exists) {
              db.collection("users")
                .where("userId", "==", tkData.uid)
                .limit(1)
                .get()
                .then((document) => {
                  loginData.username = [];
                  document.forEach((docdoc) => {
                    loginData.username.push({ username: docdoc.data().handle });
                  });
                  let bn = loginData.username[0].username;
                  loginData.username = bn;
                  loginData.shopname = "";
                  return res.json({ loginData });
                })
                .catch((err) => {
                  console.error(err);
                  loginData.shopname = [];
                  doc.forEach((docdoc) => {
                    loginData.shopname.push({
                      shopname: docdoc.data().shopName,
                    });
                  });
                  let bn_1 = loginData.shopname[0].shopname;
                  loginData.shopname = bn_1;
                  loginData.username = "";
                  return res.json({ loginData });
                });
            }
          } catch (err_1) {
            console.error(err_1);
            return res.json({ message: "Esus you did wrong" });
          }
        });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/wrong-password") {
        return res
          .status(403)
          .json({ general: "Wrong credentials,please try again..." });
      } else return res.status(500).json({ error: err.code });
    });
};

exports.uploadUserImage = (req, res) => {
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');
  
    const busboy = new BusBoy({ headers: req.headers });
  
    let imageToBeUploaded = {};
    let imageFileName;
  
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        console.log(fieldname, file, filename, encoding, mimetype);
        if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
            return res.status(400).json({ error: 'Wrong file type submitted' });
         }

      const imageExtension = filename.split('.')[filename.split('.').length - 1];
      imageFileName = `${Math.round(
        Math.random() * 1000000000000
      ).toString()}.${imageExtension}`;
      const filepath = path.join(os.tmpdir(), imageFileName);
      imageToBeUploaded = { filepath, mimetype };
      file.pipe(fs.createWriteStream(filepath));
    });
    busboy.on('finish', () => {
      admin
        .storage()
        .bucket()
        .upload(imageToBeUploaded.filepath, {
          resumable: false,
          metadata: {
            metadata: {
              contentType: imageToBeUploaded.mimetype
            }
          }
        })
        .then(() => {
          const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
          return db.doc(`/users/${req.user.handle}`).update({ imgUrl : imageUrl });
        })
        .then(() => {
          return res.json({ message: 'image uploaded successfully' });
        })
        .catch((err) => {
          console.error(err);
          return res.status(500).json({ error: 'something went wrong' });
        });
    });
    busboy.end(req.rawBody);
  };
/////////////////////////////////////////////

exports.uploadShopImage = (req, res) => {
  const BusBoy = require('busboy');
  const path = require('path');
  const os = require('os');
  const fs = require('fs');

  const busboy = new BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      console.log(fieldname, file, filename, encoding, mimetype);
      if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
          return res.status(400).json({ error: 'Wrong file type submitted' });
       }

    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    imageFileName = `${Math.round(
      Math.random() * 1000000000000
    ).toString()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on('finish', () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype
          }
        }
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/shops/${req.shop.shopName}`).update({ imgUrl : imageUrl });
      })
      .then(() => {
        return res.json({ message: 'image uploaded successfully' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: 'something went wrong' });
      });
  });
  busboy.end(req.rawBody);
};

exports.uploadShopImageDetails = (req, res) => { //uploadShopImageBarber
  const BusBoy = require('busboy');
  const path = require('path');
  const os = require('os');
  const fs = require('fs');

  const busboy = new BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      console.log(fieldname, file, filename, encoding, mimetype);
      if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
          return res.status(400).json({ error: 'Wrong file type submitted' });
       }

    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    imageFileName = `${Math.round(
      Math.random() * 1000000000000
    ).toString()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on('finish', () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype
          }
        }
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/shops/${req.shop.shopName}`).update({ imgUrlDetails : imageUrl });
      })
      .then(() => {
        return res.json({ message: 'image uploaded successfully' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: 'something went wrong' });
      });
  });
  busboy.end(req.rawBody);
};

exports.uploadShopImageBarber = (req, res) => { //uploadShopImageBarber
  const BusBoy = require('busboy');
  const path = require('path');
  const os = require('os');
  const fs = require('fs');

  const busboy = new BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      console.log(fieldname, file, filename, encoding, mimetype);
      if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
          return res.status(400).json({ error: 'Wrong file type submitted' });
       }

    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    imageFileName = `${Math.round(
      Math.random() * 1000000000000
    ).toString()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on('finish', () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype
          }
        }
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        let shopName ;
        shopName = req.shop.shopName
        return db.doc(`/shops/${req.shop.shopName}`).update({ imgUrlDetails : imageUrl });
      })
      .then(() => {
        return res.json({ message: 'image uploaded successfully' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: 'something went wrong' });
      });
  });
  busboy.end(req.rawBody);
};

exports.profile = (req, res) => {
  db.collection("users")
    .get()
    .then((data) => {
      let users = [];
      data.forEach((doc) => {
        users.push({
          email: doc.id,
          handle: doc.data().handle,
          name: doc.data().name,
          phoneNum: doc.data().phoneNum,
          userGender: doc.data().userGender,
          createAt: doc.data().createAt,
        });
      });
      return res.json(users);
    })
    .catch((err) => console.error(err));
};

//////////////////////////////////////////////////
exports.getAuthenticatedUser = (req, res) => {
  let userData = {};
  db.doc(`/users/${req.user.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.credentials = doc.data();
      }
      return res.json(userData);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
/////////////// shop signup ////////////////////////
exports.signupShop = (req, res) => {
  const newShop = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    shopName: req.body.shopName,
    adminName: req.body.adminName,
    phoneNum: req.body.phoneNum,
    
  };

  const noImg = 'no-Img.png';

  let token, shopId;
  db.doc(`/shops/${newShop.shopName}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res
          .status(400)
          .json({ shopName: "this shopName is already taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newShop.email, newShop.password);
      }
    })
    .then((data) => {
      shopId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const shopCridentials = {
        shopName: newShop.shopName,
        adminName: newShop.adminName,
        email: newShop.email,
        phoneNum: newShop.phoneNum,
        createAt: new Date().toISOString(),
        imgUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
        shopId,
      };
      return db.doc(`/shops/${newShop.shopName}`).set(shopCridentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email is already is use" });
      } else {
        return res.status(500).json({ error: err.code });
      }
    });
};

// edit User
exports.editUser = (req, res) => {
  const editUserData = {
    name: req.body.name,
    phoneNum: req.body.phoneNum,
    userGender: req.body.userGender,
  };

  db.doc(`/users/${req.user.handle}`)
    .update(editUserData)
    .then(() => {
      return res.json({ message: "Edit User successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

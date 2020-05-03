const { db } = require("../util/admin");

exports.addHairStyle = (req, res) => {
  const newHairStyle = {
    hairName: req.body.hairName,
    price: req.body.price,
  };
  let hairStyleId;

  db.collection("hairStyles")
    .doc()
    .get()
    .then((doc) => {
      hairStyleId = doc.id;
    })
    .then(() => {
      const hairCridentials = {
        price: newHairStyle.price,
        shopId: req.shop.shopId,
        createAt: new Date().toISOString(),
        hairName: newHairStyle.hairName,
        hairStyleId: hairStyleId,
      };
      return db.doc(`/hairStyles/${hairStyleId}`).set(hairCridentials);
    })
    .then(() => {
      return res.status(200).json({ message: "hairStyle added successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.getHairStyle = (req, res) => {
  let hairStyleData = {};
  db.doc(`/shops/${req.params.shopName}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "HairStyle not found" });
      }
      hairStyleData = doc.data();
      hairStyleData.shopId = doc.data().shopId;

      db.collection("hairStyles")
        .where("shopId", "==", hairStyleData.shopId)
        .get()
        .then((data) => {
          hairStyleData.hairStyles = [];
          data.forEach((docdoc) => {
            hairStyleData.hairStyles.push({
              pi: docdoc.data().hair
            });
          });

          let x = [];
          x = hairStyleData.hairStyles[0].pi;
          hairStyleData.hairStyles = x;

          return res.json(hairStyleData);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ error: err.code });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

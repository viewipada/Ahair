const { db } = require("../util/admin");

const config = require("../util/config");

exports.addBarber = (req, res) => {
  const newBarber = {
    barberName: req.body.barberName,
    phoneNum: req.body.phoneNum,
    hairAble: req.body.hairAble,
    shopId: req.shop.shopId,
    createAt: new Date().toISOString(),
    imgUrl : `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${req.body.imgUrl}?alt=media`,
  };

  db.collection("barbers")
    .add(newBarber)
    .then((doc) => {
      db.doc(`/barbers/${doc.id}`).update({ barberId: doc.id });
      return res.status(200).json({ message: `create ${doc.id} succesfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

exports.getBarber = (req, res) => {
  let barberData = {};
  db.doc(`/barbers/${req.params.barberId}`)
    .get()
    .then((doc) => {
      barberData.barberId = doc.data().barberId;
      barberData.hairAble = doc.data().hairAble;
      barberData.shopId = doc.data().shopId;
      let count = 0;
      barberData.list = [];
      const hab = barberData.hairAble;
      for (const hair of hab) {
        db.collection("hairStyles")
          .where("shopId", "==", barberData.shopId)
          .get()
          .then((dataQ) => {
            dataQ.forEach((docdoc) => {
              const y = docdoc.data().hair.entries();
              for (const x of y) {
                if (x.hairId === hair.hairId) {
                  barberData.list.push({
                    hairId: x.hairId,
                    hairName: x.hairName,
                    price: x.price,
                    type: x.type,
                    time: hair.time,
                  }
                  );
                }
              }count++
            }
            );
          });
      }
      return res.json({count});
    });
};

exports.getAllBarberInShop = (req, res) => {
  let barberData = {};
  barberData.shopName = req.params.shopName;

  db.doc(`/shops/${barberData.shopName}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "shop not found" });
      }
      barberData = doc.data();
      barberData.shopId = doc.data().shopId;

      db.collection("barbers")
        .where("shopId", "==", barberData.shopId)
        .orderBy("createAt", "desc")
        .get()
        .then((data) => {
          barberData.barber = [];
          data.forEach((docdoc) => {
            barberData.barber.push(docdoc.data());
          });
          return res.json(barberData);
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

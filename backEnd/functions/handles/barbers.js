const { db } = require("../util/admin");

exports.addBarber = (req, res) => {
  const newBarber = {
    barberName: req.body.barberName,
    phoneNum: req.body.phoneNum,
    hairAble: req.body.hairAble,
    shopId: req.shop.shopId,
    createAt: new Date().toISOString(),
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

      //return res.json(barberData);
      let count = 0;
      barberData.list = [];
      var l = new Promise((resolve, reject) => {
        barberData.hairAble.forEach((hair, index, array) => {
          db.collection("hairStyles")
            .where("shopId", "==", barberData.shopId)
            .get()
            .then((dataQ) => {
              dataQ.forEach((docdoc) => {
                docdoc.data().hair.forEach((x) => {
                  if (x.hairId === hair.hairId) {
                    barberData.list.push({
                      hairId: x.hairId,
                      hairName: x.hairName,
                      price: x.price,
                      type: x.type,
                      time: hair.time,
                    });
                    count++;
                  }
                });
              });
            });
          if (index === array.length - 1) {
            resolve();
          }
        });
      });
      l.then(() => {
        return res.json({ count });
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: "barber not found" });
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

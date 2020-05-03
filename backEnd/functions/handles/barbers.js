const { db } = require("../util/admin");

exports.addBarber = (req, res) => {
  db.collection("barbers")
    .where("barberName", "==", req.body.barberName)
    .get()
    .then((doc) => {
      let dd = {};
      dd.docId = [];
      doc.forEach((docdoc) => {
        dd.docId.push({ barberId: docdoc.id });
      });

      let t = dd.docId[0].barberId;
      dd.docId = t;

      db.doc(`/barbers/${dd.docId}`)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            return res.status(500).json({ error: "No barber added" });
          } else {
            db.collection("hairBarbers").add({
              barberId: dd.docId,
              hairStyleId: req.body.hairStyleId,
              time: req.body.time,
            });
            return res.json({ message : 'Alright we got it!!'});
          }
        });
    })
    .catch((err) => {
      db.collection("barbers")
        .add({
          barberName: req.body.barberName,
          createAt: new Date().toISOString(),
          shopId: req.shop.shopId,
          phoneNum: req.body.phoneNum,
        })
        .then((data) => {
          return db.collection("hairBarbers").add({
            barberId: data.id,
            hairStyleId: req.body.hairStyleId,
            time: req.body.time,
          });
        });
      return res.json({ error: "good" });
    });
};

exports.getBarber = (req, res) => {
  let barberData = {};
  db.doc(`/shops/${req.params.shopName}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Barber not found" });
      }
      barberData = doc.data();
      barberData.shopId = doc.data().shopId;

      db.collection("barbers")
        .where("shopId", "==", barberData.shopId)
        .orderBy("createAt", "desc")
        .get()
        .then((data) => {
          barberData.barbers = [];
          data.forEach((docdoc) => {
            barberData.barbers.push(docdoc.data());
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

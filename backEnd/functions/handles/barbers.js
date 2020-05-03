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
      res.json({ message: `create ${doc.id} succesfully` });
      return res.status(200).json({ message: `create ${doc.id} succesfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

// exports.getBarber = (req, res) => {
//   let barberData = {};
//   db.doc(`/shops/${req.params.shopName}/${req.params.barberName}`)
//     .get()
//     .then((doc) => {
//       if (!doc.exists) {
//         return res.status(404).json({ error: "Barber not found" });
//       }
//       barberData = doc.data();
//       barberData.shopId = doc.data().shopId;

//       db.collection("barbers")
//         .where("shopId", "==", barberData.shopId)
//         .orderBy("createAt", "desc")
//         .get()
//         .then((data) => {
//           barberData.barbers = [];
//           data.forEach((docdoc) => {
//             barberData.barbers.push(docdoc.data());
//           });
//           return res.json(barberData);
//         })
//         .catch((err) => {
//           console.error(err);
//           res.status(500).json({ error: err.code });
//         });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: err.code });
//     });
// };

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

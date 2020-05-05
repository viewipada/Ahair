const { db } = require("../util/admin");



exports.postReviewFromShop = (req, res) => {
  const newReviewFromShop = {
    rate: req.body.rate,
    shopName: req.shop.shopName,
    shopId: req.shop.shopId,
    bookingId: req.body.bookingId,
    createAt: new Date().toISOString(),
  };

  db.doc(`/booking/${req.body.bookingId}`)
    .get()
    .then((doc) => {
      return (newReviewFromShop.userId = doc.data().userId);
    })
    .then(() => {
      db.collection("reviewFromShop")
        .add(newReviewFromShop)
        .then((doc) => {
          db.doc(`/booking/${newReviewFromShop.bookingId}`).update({
            reviewedFromShop: true,
          });
          return res
            .status(200)
            .json({ message: `create ${doc.id} succesfully` });
        })
        .catch((err) => {
          res.status(500).json({ error: "something went wrong" });
          console.error(err);
        });
    });
};

exports.getReviewFromShop = (req, res) => {
  let reviewData = {};
  db.doc(`/users/${req.params.handle}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Review not found" });
      }
      reviewData = doc.data();
      reviewData.userId = doc.data().userId;
      reviewData.username = doc.data().handle;
      reviewData.averageRate = 0;

      db.collection("reviewFromShop")
        .where("userId", "==", reviewData.userId)
        .orderBy("createAt", "desc")
        .get()
        .then((data) => {
          reviewData.reviewFromShop = [];
          data.forEach((docdoc) => {
            reviewData.reviewFromShop.push(docdoc.data());
            reviewData.averageRate =
              reviewData.averageRate + docdoc.data().rate;
          });
          if (reviewData.reviewFromShop.length !== 0) {
            reviewData.averageRate =
              reviewData.averageRate / reviewData.reviewFromShop.length;
            db.doc(`/users/${reviewData.username}`).update({
              averageRate: reviewData.averageRate,
            });
          } else {
            db.doc(`/users/${reviewData.username}`).update({ averageRate: 0 });
          }

          return res.json(reviewData);
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

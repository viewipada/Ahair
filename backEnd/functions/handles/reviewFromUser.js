const { db } = require("../util/admin");

const config = require("../util/config");

exports.postReviewFromUser = (req, res) => {
  const newReviewFromUser = {
    message: req.body.message,
    rate: req.body.rate,
    userHandle: req.user.handle,
    userId: req.user.userId,
    bookingId: req.body.bookingId,
    createAt: new Date().toISOString(),
    imgUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${req.body.imgUrl}?alt=media`,
  };

  db.doc(`/booking/${req.body.bookingId}`)
    .get()
    .then((doc) => {
      return (newReviewFromUser.shopId = doc.data().shopId);
    })
    .then(() => {
      db.collection("reviewFromUser")
        .add(newReviewFromUser)
        .then((doc) => {
          db.doc(`/booking/${newReviewFromUser.bookingId}`).update({
            reviewedFromUser: true,
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

exports.getReviewFromUser = (req, res) => {
  let reviewData = {};
  db.doc(`/shops/${req.params.shopName}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Review not found" });
      }
      reviewData = doc.data();
      reviewData.shopId = doc.data().shopId;
      reviewData.shopName =doc.data().shopName;
      reviewData.averageRate = 0;

      db.collection("reviewFromUser")
        .where("shopId", "==", reviewData.shopId)
        .orderBy("createAt", "desc")
        .get()
        .then((data) => {
          reviewData.reviewFromUser = [];
          data.forEach((docdoc) => {
            reviewData.reviewFromUser.push(docdoc.data());
            reviewData.averageRate = reviewData.averageRate + docdoc.data().rate;
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

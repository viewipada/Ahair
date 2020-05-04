const { db } = require("../util/admin");

exports.addBooking = (req, res) => {
  const newBooking = {
    username: req.user.handle,
    userId: req.user.userId,
    shopId: req.body.shopId,
    shopName: req.body.shopName,
    barberId: req.body.barberId,
    barberName: req.body.barberName,
    hairStyles: req.body.hairStyles,
    total: req.body.total,
    date: req.body.date,
    startTime: req.body.startTime,
    stopTime: req.body.stopTime,
    reviewedFromShop : req.body.reviewedFromShop,
    reviewedFromUser : req.body.reviewedFromUser,
    //imgUrl: req.body.imgUrl
    createAt: new Date().toISOString(),
  };

  db.collection("booking")
    .add(newBooking)
    .then((doc) => {
      db.doc(`/booking/${doc.id}`).update({ bookingId: doc.id });
      return res.status(200).json({ message: `create ${doc.id} succesfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

exports.getBooking = (req, res) => {
  let bookingData = {};
  db.doc(`/booking/${req.params.bookingId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "booking not found" });
      }

      bookingData = doc.data();

      return res.status(200).json(bookingData);
    })
    .catch((err) => {
      console.error(err);
      return res.json({ error: err.code });
    });
};

exports.getBookingForOneUser = (req, res) => {
  db.collection("booking")
    .where("username", "==", req.user.handle)
    .orderBy("createAt", "desc")
    .get()
    .then((data) => {
      let bookingData = {};
      bookingData.document = [];

      data.forEach((docdoc) => {
        bookingData.document.push(docdoc.data());
      });

      let x = bookingData.document;
      bookingData = x;

      return res.json(bookingData);
    })
    .catch((err) => {
      console.error(err);
      return res.json({ error: err.code });
    });
};

exports.getBookingForOneShop = (req, res) => {
  db.collection("booking")
    .where("shopName", "==", req.shop.shopName)
    .orderBy("createAt", "desc")
    .get()
    .then((data) => {
      let bookingData = {};
      bookingData.document = [];

      data.forEach((docdoc) => {
        bookingData.document.push(docdoc.data());
      });

      let x = bookingData.document;
      bookingData = x;

      return res.json(bookingData);
    })
    .catch((err) => {
      console.error(err);
      return res.json({ error: err.code });
    });
};

exports.getBookingForOneBarber = (req, res) => {
  db.collection("booking")
    .where("barberName", "==", req.params.barberName)
    .orderBy("createAt", "desc")
    .get()
    .then((data) => {
      let bookingData = {};
      bookingData.document = [];

      data.forEach((docdoc) => {
        bookingData.document.push(docdoc.data());
      });

      let x = bookingData.document;
      bookingData = x;

      return res.json(bookingData);
    })
    .catch((err) => {
      console.error(err);
      return res.json({ error: err.code });
    });
};

exports.deleteBooking = (req, res) => {
  const document = db.doc(`/booking/${req.params.bookingId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'booking not found' });
      }
      if (doc.data().username !== req.user.handle) {
        return res.status(403).json({ error: 'Unauthorized' });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: 'booking deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

// exports.getBooking = (req, res) => {
//   let bookingData = {};
//   db.doc(`/booking/${req.params.bookingId}`)
//     .get()
//     .then((doc) => {
//       if (!doc.exists) {
//         return res.status(404).json({ error: "booking not found" });
//       }

//       bookingData = doc.data();

//       db.collection("hairBarbers")
//         .where("barberId", "==", bookingData.barberId)
//         .where("hairStyleId", "==", bookingData.hairStyleId)
//         .get()
//         .then((data) => {
//           bookingData.time = [];
//           data.forEach((docdoc) => {
//             bookingData.time.push({ time: docdoc.data().time });
//           });

//           let t = bookingData.time[0].time;
//           bookingData.time = t;

//           db.collection("hairStyles")
//             .where("hairStyleId", "==", bookingData.hairStyleId)
//             .get()
//             .then((data) => {
//               bookingData.hairName = [];
//               data.forEach((docdoc) => {
//                 bookingData.hairName.push({ hairName: docdoc.data().hairName });
//               });

//               let hn = bookingData.hairName[0].hairName;
//               bookingData.hairName = hn;

//               db.collection("barbers")
//                 .where("barberId", "==", bookingData.barberId)
//                 .get()
//                 .then((data) => {
//                   bookingData.barberName = [];
//                   data.forEach((docdoc) => {
//                     bookingData.barberName.push({
//                       barberName: docdoc.data().barberName,
//                     });
//                   });

//                   let bn = bookingData.barberName[0].barberName;
//                   bookingData.barberName = bn;

//                   return res.json(bookingData);
//                 })
//                 .catch((err) => {
//                   console.error(err);
//                   return res.json({ error: err.code });
//                 });
//             });
//         })
//         .catch((err) => {
//           console.error(err);
//           return res.json({ error: err.code });
//         });
//     });
// };

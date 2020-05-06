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
    createAt: new Date().toISOString(),
  };

  db.collection("booking")
    .add(newBooking)
    .then((doc) => {
      db.doc(`/booking/${doc.id}`).update({ bookingId: doc.id, done: false , reviewedFromShop : false ,reviewedFromUser: false  });
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
exports.done = (req, res) => {
  const document = db.doc(`/booking/${req.params.bookingId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "booking not found" });
      }
      if (doc.data().shopName !== req.shop.shopName) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.update({ done: true });
      }
    })
    .then(() => {
      res.json({ message: "already successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.deleteBookingFromUser = (req, res) => {
  const document = db.doc(`/booking/${req.params.bookingId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "booking not found" });
      }
      if (doc.data().username !== req.user.handle) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "booking deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.deleteBookingFromShop = (req, res) => {
  const document = db.doc(`/booking/${req.params.bookingId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "booking not found" });
      }
      if (doc.data().shopName !== req.shop.shopName) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "booking deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};




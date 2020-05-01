const { db } = require('../util/admin');

exports.addBooking = (req , res) => {
    if(req.body.message.trim() === ''){
        return res.status(400).json({ message :'message must not be empty'});
    }
    
    const  newBooking = {
        shopId : req.body.shopId,
        userHandle: req.user.handle,
        userId :req.user.userId, 
        price: req.body.price,
        hairBarber: req.body.hairBarber,
        //imgUrl: req.body.imgUrl
        createAt: new Date().toISOString()
    };

    db
    .collection('booking')
    .add(newBooking)
    .then(doc => {res.json({message :`create ${doc.id} succesfully`}); 
    return res.json({message :`create ${doc.id} succesfully`}); })
    .catch(err => {
        res.status(500).json({ error : 'something went wrong'});
        console.error(err);
    });
};

exports.getBooking = (req, res) => {
    let bookingData = {};
    db.doc(`/users/${req.params.handle}`)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return res.status(404).json({ error: 'Booking document is not found' });
        }
        bookingData = doc.data();
        bookingData.userId = doc.data().userId;
        bookingData.username = doc.data().handle;

        db.collection('booking')
          .where('userId', '==', bookingData.userId)
          .orderBy('createAt','desc')
          .get()
          .then((data) => {
              bookingData.Booking = [];
              data.forEach((bookingDoc) => {
                bookingData.Booking.push({
                    bookingId : bookingDoc.id,
                    username : bookingData.username,
                    shopId : bookingDoc.data().shopId,
                    createAt : bookingDoc.data().createAt,
                    //imgUrl
                    price : bookingDoc.data().price    
                });
              });
              return res.json(bookingData);
          }).catch((err) => {console.error(err); res.status(500).json({ error : err.code })})
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };
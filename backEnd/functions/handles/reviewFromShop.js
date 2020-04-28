const { db } = require('../util/admin');

exports.postReviewFromShop = (req , res) => {
      
    const  newReviewFromShop = {
        userId : req.body.userId,
        rete : req.body.rate,
        shopName: req.shop.shopName,
        shopId :req.shop.shopId, 
        createAt: new Date().toISOString()
    };

    db
    .collection('reviewFromShop')
    .add(newReviewFromShop)
    .then(doc => {res.json({message :`create ${doc.id} succesfully`}); 
    return res.json({message :`create ${doc.id} succesfully`}); })
    .catch(err => {
        res.status(500).json({ error : 'something went wrong'});
        console.error(err);
    });
};

exports.getReviewFromShop = (req, res) => {
    let reviewData = {};
    db.doc(`/users/${req.params.handle}`)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return res.status(404).json({ error: 'Review not found' });
        }
        reviewData = doc.data();
        reviewData.userId = doc.data().userId;

        db.collection('reviewFromShop')
          .where('userId', '==', reviewData.userId)
          .orderBy('createAt','desc')
          .get()
          .then((data) => {
              reviewData.reviewFromShop = [];
              data.forEach((docdoc) => {
                reviewData.reviewFromShop.push(docdoc.data());
              });
              return res.json(reviewData);
          }).catch((err) => {console.error(err); res.status(500).json({ error : err.code })})
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };
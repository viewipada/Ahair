const { db } = require('../util/admin');

exports.postReviewFromUser = (req , res) => {
    if(req.body.message.trim() === ''){
        return res.status(400).json({ message :'message must not be empty'});
    }
    
    const  newReviewFromUser = {
        message : req.body.message,
        shopId : req.body.shopId,
        rete : req.body.rate,
        userHandle: req.user.handle,
        userId :req.user.userId, 
        createAt: new Date().toISOString()
    };

    db
    .collection('reviewFromUser')
    .add(newReviewFromUser)
    .then(doc => {res.json({message :`create ${doc.id} succesfully`}); 
    return res.json({message :`create ${doc.id} succesfully`}); })
    .catch(err => {
        res.status(500).json({ error : 'something went wrong'});
        console.error(err);
    });
};

exports.getReviewFromUser = (req, res) => {
    let reviewData = {};
    db.doc(`/shops/${req.params.shopName}`)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return res.status(404).json({ error: 'Review not found' });
        }
        reviewData = doc.data();
        reviewData.shopId = doc.data().shopId;

        db.collection('reviewFromUser')
          .where('shopId', '==', reviewData.shopId)
          .orderBy('createAt','desc')
          .get()
          .then((data) => {
              reviewData.reviewFromUser = [];
              data.forEach((docdoc) => {
                reviewData.reviewFromUser.push(docdoc.data());
              });
              return res.json(reviewData);
          }).catch((err) => {console.error(err); res.status(500).json({ error : err.code })})
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };
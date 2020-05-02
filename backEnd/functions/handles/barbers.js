const { db } = require('../util/admin');

 exports.addBarber = (req,res) => {
    db.collection('barbers')
    .where('barberName','==',req.body.barberName)
    .get()
    .then((doc) => {
      let bbData = {};
      bbData = doc.data();
      
      if(!doc.exists){
        db.collection('barber')
        .add({
          barberName: req.body.barberName,
          createAt: new Date().toISOString(),
          shopId: req.shop.shopId,
          phoneNum: newBarber.phoneNum
        })
        .then(data => {
          return db
          .collection('hairBarbers')
          .add({
            barberId: data.id,
            hairStyleId: req.body.hairStyleId,
            time: req.body.time
          })
        })
        .then(() => {
          return res.json({ message : 'Create Barbber and HairBarber Succesfully'})
        })
        .catch((err) => {console.error(err); res.json({ error : err.code}) ; })
      }
      else{
         db
          .collection('hairBarbers')
          .add({
            barberId: bbData.id,
            hairStyleId: req.body.hairStyleId,
            time: req.body.time
          })
      }
    })
    .catch((err) => {
      console.error(err);
      return res.json({ error : err.code });
    })
};

 exports.getBarber = (req,res) => {
    let barberData = {};
    db.doc(`/shops/${req.params.shopName}`)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return res.status(404).json({ error: 'Barber not found' });
        }
        barberData = doc.data();
        barberData.shopId = doc.data().shopId;

        db.collection('barbers')
          .where('shopId', '==', barberData.shopId)
          .orderBy('createAt','desc')
          .get()
          .then((data) => {
              barberData.barbers = [];
              data.forEach((docdoc) => {
                barberData.barbers.push(docdoc.data());
              });
              return res.json(barberData);
          }).catch((err) => {console.error(err); res.status(500).json({ error : err.code })})
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
};
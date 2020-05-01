const { db } = require('../util/admin');

 exports.addBarber = (req,res) => {
     const newBarber = {
         barberName: req.boby.barberName,
         phoneNum: req.boby.phoneNum
     };

     let barberId;

     db.collection('barbers').doc().get()
     .then(doc => {
         barberId = doc.id;
     })
     .then(() => {
         const barberCridentials = {
             barberId: barberId,
             barberName: newBarber.barberName,
             createAt: new Date().toISOString(),
             shopId: req.shop.shopId,
            //  imgUrl: "wait",
             phoneNum: newBarber.phoneNum
         };
         return db.doc(`/barbers/${barberId}`).set(barberCridentials);
     })
     .then(() => {
         return res.json({message: "barber added successfully" });
     })
     .catch((err) => {
         console.error(err);
         return res.status(500).json({ error: err.code });
     });
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
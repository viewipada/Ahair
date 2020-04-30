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
const { db } = require('../util/admin');

 exports.addBarber = (req,res) => {
     const newBarber = {
         barberName: req.body.barberName,
         phoneNum: req.body.phoneNum
     };

     db.collection('barbers')
     .where('barberName','==', newBarber.barberName)
     .get()
     .then((doc) => {
       let barberData = {};
       if(!doc.exists){ 
          

          db.collection('barbers')
          .doc()
          .get()
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
            db.doc(`/barbers/${barberId}`).set(barberCridentials);

            return db.doc(`/barbers/${barberId}`).get()
          })
          .then(async (doc) => {
            let barberD ={};
            barberD.barberId = doc.data().barberId;
            
            try {
              const doc_1 = await db
                .collection('hairBarbers')
                .add({
                  barberId: barberData.id,
                  hairStyleId: req.body.hairStyleId,
                  time: req.body.time
                });
              res.json({ message: `create ${doc_1.id} succesfully` });
              return res.json({ message: `create ${doc_1.id} succesfully` });
            }
            catch (err) {
              res.status(500).json({ error: 'something went wrong' });
              console.error(err);
            }
          }).catch((err) => {
            console.error(err);
            return res.json({ error : err.code});
          });
      }
      else {
        barberData = doc.data();
          
        db
        .collection('hairBarbers')
        .add({
              barberId : barberData.id,
              hairStyleId : req.body.hairStyleId,
              time : req.body.time
        })
        .then(doc => {res.json({message :`create ${doc.id} succesfully`}); 
          return res.json({message :`create ${doc.id} succesfully`}); 
        })
        .catch(err => {
          res.status(500).json({ error : 'something went wrong'});
          console.error(err);
        });
    }
  })
  .catch(err => {
    res.status(500).json({ error : 'something went wrong'});
    console.error(err);
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
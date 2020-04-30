const { db } = require('../util/admin');

 exports.addHairStyle = (req,res) =>{
    const newHairStyle = {
        hairName : req.body.hairName,
        price : req.body.price
    };
    let hairStyleId;

    db.collection('hairStyles').doc().get()
    .then(doc => {
        hairStyleId = doc.id;
    })
    .then(() => {
        const hairCridentials = {
           price: newHairStyle.price,
           shopId: req.shop.shopId,
           createAt: new Date().toISOString(),
           hairName: newHairStyle.hairName,
           hairStyleId: hairStyleId
        };
        return db.doc(`/hairStyles/${hairStyleId}`).set(hairCridentials);
    })
    .then(() => {
        return res.json({ message: "hairStyle added successfully" });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
};
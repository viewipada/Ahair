const { db } = require("../util/admin");

exports.addHairStyle = (req, res) => {
  const newHairStyle = {
    hair: req.body.hair,
    shopId: req.shop.shopId,
    createAt: new Date().toISOString(),
  };

  db.collection('hairStyles').where('shopId','==', req.shop.shopId).get()
  .then((doc) => {
    let dd = {};
    dd.hairStyleId =[];
    doc.forEach((docdoc) => {
      dd.hairStyleId.push( {hId : docdoc.data().hairStyleId })
    })

    let x = dd.hairStyleId[0].hId;
    dd.hairStyleId = x

    db.doc(`/hairStyles/${dd.hairStyleId}`).update(newHairStyle);
    
    return res.json({ message : `edited!! ${dd.hairStyleId} `});
  })
  .catch((err) => {
    db.collection("hairStyles")
    .add(newHairStyle)
    .then((doc) => {
      db.doc(`/hairStyles/${doc.id}`).update({hairStyleId : doc.id});
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
    return res.json({ message : 'added++'})
  })
};

exports.getHairStyle = (req, res) => {
  let hairStyleData = {};
  db.doc(`/shops/${req.params.shopName}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "HairStyle not found" });
      }
      hairStyleData = doc.data();
      hairStyleData.shopId = doc.data().shopId;

      db.collection("hairStyles")
        .where("shopId", "==", hairStyleData.shopId)
        .get()
        .then((data) => {
          hairStyleData.hairStyles = [];
          data.forEach((docdoc) => {
            hairStyleData.hairStyles.push({
              pi: docdoc.data().hair
            });
          });

          let x = [];
          x = hairStyleData.hairStyles[0].pi;
          hairStyleData.hairStyles = x;

          return res.json(hairStyleData);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ error: err.code });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

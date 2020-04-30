const { db } = require('../util/admin');

exports.addShopDetails = (req, res) => {
    const shopDetails = {
      address : req.body.address,
      openTime : req.body.openTime,
      closeTime : req.body.closeTime,
    }
  
    db.doc(`/shops/${req.shop.shopName}`)
      .update(shopDetails)
      .then(() => {
        return res.json({ message: "Details added successfully" });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
  };

exports.getAllShops = (req,res) => {
    db
        .collection('shops')
        .orderBy('shopName','desc')
        .get()
        .then(data => {
            let shops = [];
            data.forEach(doc => {
                shops.push(docdoc.data());
            });
            return res.json(shops);
        })
        .catch((err) => console.error(err));
};


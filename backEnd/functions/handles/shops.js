const { db } = require("../util/admin");

exports.addShopDetails = (req, res) => {
  const shopDetails = {
    address: req.body.address,
    openTime: req.body.openTime,
    closeTime: req.body.closeTime,
    colors: req.body.colors,
  };

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

exports.editShop = (req, res) => {
  const editShopData = {
    adminName: req.body.adminName,
    address: req.body.address,
    phoneNum: req.body.phoneNum,
    openTime: req.body.openTime,
    closeTime: req.body.closeTime,
    imgUrl: req.body.imgUrl,
  };

  db.doc(`/shops/${req.shop.shopName}`)
    .update(editShopData)
    .then(() => {
      return res.json({ message: "Edit shop successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.getAllShops = (req, res) => {
  db.collection("shops")
    .orderBy("shopName", "desc")
    .get()
    .then((data) => {
      let shops = [];
      data.forEach((doc) => {
        shops.push(doc.data());
      });
      return res.json(shops);
    })
    .catch((err) => console.error(err));
};

exports.getAshop = (req, res) => {
  let shopData = {};
  db.doc(`/shops/${req.shop.shopName}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        shopData.credentials = doc.data();
      }
      return res.json(shopData);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

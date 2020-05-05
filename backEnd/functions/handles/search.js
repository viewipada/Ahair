const { admin, db } = require("../util/admin");

exports.searchShop = (req,res) => {
    db.collection("shops").where("shopName","==",req.query.key).get()
    .then((data) => {
      let shops = [];
      data.forEach((doc) => {
        shops.push(doc.data());
      });
      return res.json(shops);
    }).catch((err) => console.error(err));
  };
  //////////////////////////////////////////////////////////////
  exports.searchAddress = (req,res) => {
    db.collection("shops").where("address","==",req.query.key).get()
    .then((data) => {
      let address = [];
      data.forEach((doc) => {
        address.push(doc.data());
      });
      return res.json(address);
    }).catch((err) => console.error(err));
  };
  /////////////////////////////////////////////////////////////////
  exports.searchBarber = (req,res) => {
    db.collection("barbers").where("barberName","==",req.query.key).get()
    .then((data) => {
      let shops = [];
      data.forEach((doc) => {
        shops.push(doc.data());
      });
      return res.json(shops);
    })
    .catch((err) => console.error(err));
  }
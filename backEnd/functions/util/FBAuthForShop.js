const { admin, db } = require("./admin");

module.exports = (req, res, next) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1]; /// get the left na ja
  } else {
    console.error("No token found");
    return res.status(403).json({ error: "Unauthirized" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.shop = decodedToken;
      console.log(decodedToken);
      return db
        .collection("shops")
        .where("shopId", "==", req.shop.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      req.shop.shopName = data.docs[0].data().shopName;
      req.shop.shopId = data.docs[0].data().shopId;
      //req.user.imageUrl = data.docs[0].data().imageUrl;
      return next();
    })
    .catch((err) => {
      console.error("Error while verifying token", err);
      return res.status(403).json(err);
    });
};

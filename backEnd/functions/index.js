const functions = require("firebase-functions");

const app = require("express")();

const cors = require("cors");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

const FBAuth = require("./util/FBAuth");

const FBAuthforShop = require("./util/FBAuthForShop");

const { getAllScreams, postOneScream } = require("./handles/screams");

const {
  postReviewFromUser,
  getReviewFromUser,
} = require("./handles/reviewFromUser");

const {
  postReviewFromShop,
  getReviewFromShop,
} = require("./handles/reviewFromShop");

const {
  addBooking,
  getBooking,
  getBookingForOneUser,
  getBookingForOneShop,
  getBookingForOneBarber,
  deleteBookingFromUser,
  deleteBookingFromShop,
  done,
} = require("./handles/bookings");

const {
  addShopDetails,
  getAllShops,
  editShop,
  getAshop,
  getShopscolors,
  getOneshop,
  updateColors,
} = require("./handles/shops");

const { addHairStyle, getHairStyle } = require("./handles/hairStyle");

const {
  addBarber,
  getBarber,
  getAllBarberInShop,
} = require("./handles/barbers");

const {
  signup,
  login,
  profile,
  getAuthenticatedUser,
  signupShop,
  editUser,
} = require("./handles/users");

//, uploadImage

// Scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

////Users routes
app.post("/signup", signup);
app.post("/login", login);
//app.post('/user/image', FBAuth ,uploadImage);
app.get("/profile", profile);
app.get("/user", FBAuth, getAuthenticatedUser);
app.post("/editUser", FBAuth, editUser);

//Shops routes
app.post("/signupShop", signupShop);
app.post("/shop", FBAuthforShop, addShopDetails);
app.post("/editShop", FBAuthforShop, editShop); //updateColors
app.post("/updateColors", FBAuthforShop, updateColors);
app.get("/shop", getAllShops);
app.get("/Ashop", FBAuthforShop, getAshop);
app.get("/Oneshop/:shopName", getOneshop);
app.post("/hairStyle", FBAuthforShop, addHairStyle);
app.get("/hairStyle/:shopName", getHairStyle);
app.post("/barber", FBAuthforShop, addBarber);
app.get("/barber/person/:barberId", getBarber);
app.get("/barber/:shopName", getAllBarberInShop);
app.get("/shopcolors/:shopName", getShopscolors); //getShopscolors

//reviewfromUser routes
app.post("/reviewfromuser", FBAuth, postReviewFromUser);
app.get("/reviewfromuser/:shopName", getReviewFromUser);

//reviewfromShop routes
app.post("/reviewfromshop", FBAuthforShop, postReviewFromShop);
app.get("/reviewfromshop/:handle", getReviewFromShop);

//bookings routes
app.post("/bookings", FBAuth, addBooking);
app.get("/booking/:bookingId", getBooking);
app.get("/booking", FBAuth, getBookingForOneUser); //getBookingForOneUser
app.get("/bookingforshop", FBAuthforShop, getBookingForOneShop); //getBookingForOneShop
app.get("/bookingforbarber/:barberName", getBookingForOneBarber); //getBookingForOneBarber
app.delete("/bookingfromuser/:bookingId", FBAuth, deleteBookingFromUser); //deleteBookingFromUser
app.delete("/bookingfromshop/:bookingId", FBAuthforShop, deleteBookingFromShop);//deleteBookingFromShop
app.get("/done/:bookingId", FBAuthforShop, done);

exports.api = functions.https.onRequest(app);
const functions = require('firebase-functions');

const app = require('express')();

const cors = require('cors');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

const FBAuth = require('./util/FBAuth');

const FBAuthforShop = require('./util/FBAuthForShop');

const { getAllScreams , postOneScream } = require('./handles/screams');

const { postReviewFromUser, getReviewFromUser } = require('./handles/reviewFromUser');

const { postReviewFromShop, getReviewFromShop } = require('./handles/reviewFromShop');

<<<<<<< HEAD
const { addHairStyle } = require('./handles/hairStyle');

const { addBarber } = require('./handles/barbers');
=======
const { addShopDetails, getAllShops } = require('./handles/shops');
>>>>>>> c14d0e0852c2ecd9c220b61145294395df09b82d

const { 
    signup,
    login,
    profile,
    getAuthenticatedUser,
<<<<<<< HEAD
    signupShop,
    addShopDetails} = require('./handles/users');
=======
    signupShop } = require('./handles/users');
>>>>>>> c14d0e0852c2ecd9c220b61145294395df09b82d
 
//, uploadImage

// Scream routes
app.get('/screams' , getAllScreams );
app.post('/scream' , FBAuth, postOneScream);

////Users routes
app.post('/signup' , signup);
app.post('/login', login);
//app.post('/user/image', FBAuth ,uploadImage);
app.get('/profile',profile);
app.get('/user', FBAuth, getAuthenticatedUser);

//Shops routes
app.post('/signupShop' , signupShop);
app.post('/shop', FBAuthforShop ,addShopDetails);
<<<<<<< HEAD
app.post('/addHairStyle',FBAuthforShop,addHairStyle);
app.post('/addBarber',FBAuthforShop,addBarber);
=======
app.get('/shop',getAllShops);
>>>>>>> c14d0e0852c2ecd9c220b61145294395df09b82d

//reviewfromUser routes
app.post('/reviewfromuser' , FBAuth , postReviewFromUser);
app.get('/reviewfromuser/:shopName', getReviewFromUser );

//reviewfromShop routes
app.post('/reviewfromshop' , FBAuthforShop , postReviewFromShop);
app.get('/reviewfromshop/:handle', getReviewFromShop );


exports.api = functions.https.onRequest(app);
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

const { addHairStyle } = require('./handles/hairStyle');

const { addBarber } = require('./handles/barbers');

const { 
    signup,
    login,
    profile,
    getAuthenticatedUser,
    signupShop,
    addShopDetails} = require('./handles/users');
 
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
app.post('/hairStyle', FBAuthforShop ,addHairStyle);
app.post('/barber',FBAuthforShop,addBarber);

//reviewfromUser routes
app.post('/reviewfromuser' , FBAuth , postReviewFromUser);
app.get('/reviewfromuser/:shopName', getReviewFromUser );

//reviewfromShop routes
app.post('/reviewfromshop' , FBAuthforShop , postReviewFromShop);
app.get('/reviewfromshop/:handle', getReviewFromShop );


exports.api = functions.https.onRequest(app);
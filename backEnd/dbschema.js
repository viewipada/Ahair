let db = {
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createAt: '2020-04-02T14:40:20.436Z',
            likeCount: 5,
            commentCount: 2
        }
    ]
}
importPayment = async () => {
  let query = firebase.firestore().collection("cart");
  let productList = [];
  await query
   .get()
   .then((querysnapshot) => {
    // for (const x in querysnapshot) {
    //  console.log("querere", x);
    // }
    querysnapshot.forEach(async (cartlists) => {
     //cartlist
                    this.setState({cart: []});
                    console.log(cartlists.data().cartlist,'fdfffffff')
                    for (const [i, cart] of cartlists.data().cartlist.entries()) {
                        let productList = [];
                        if (cart.payment_status && !cart.shop_check) {
                            for (const product of cart.productlist) {
                                let query = firebase.firestore().collection("product");
                                await query
                                    .doc(product.id.split(" ")[0])
                                    .get()
                                    .then((documentsnapshots) => {
                                        if (
                                            documentsnapshots.data().store_id ===
                                            this.props.store_id
                                        ) {
                                            this.setState((prevState) => {
                                                productList.push(product);
                                                return {
                                                    ...prevState,
                                                    tmp: true,
                                                    productList: [
                                                        ...prevState.productList,
                                                        product,
                                                    ],
                                                };
                                            });
                                        }
                                    })
                                    .catch((e) => {
                                        console.log(e.message);
                                    });
                            }
                            if (this.state.tmp) {
                                let s = {
                                    productList: productList,
                                    shop_check: cart.shop_check,
                                    realCartIndex: i,
                                };
                                this.setState((prevState) => {
                                    return {
                                        ...prevState,
                                        cart: [...prevState.cart, s],
                                    };
                                });
                            }
                            this.setState({
                                tmp: false,
                                productList: [],
                            });
                        }
                        console.log("last", this.state.cart);
                    }
     this.summary(cartlists.id);
    });
   })
   .catch((e) => {
    console.log(e.message);
   });
 };
// exports.addBarber = (req, res) => {
//     db.collection("barbers")
//       .where("barberName", "==", req.body.barberName)
//       .get()
//       .then((doc) => {
//         let dd = {};//
//         dd.docId = [];//
//         doc.forEach((docdoc) => {
//           dd.docId.push({ barberId: docdoc.id });
//           })
  
//         let t = dd.docId[0].barberId;
//         dd.docId = t;
  
//         db.doc(`/barbers/${dd.docId}`)
//           .get()
//           .then((doc) => {
//             if (!doc.exists) {
//               return res.status(500).json({ error: "No barber added" });
//             } else {
//               db.collection("hairBarbers").add({
//                 barberId: dd.docId,
//                 hairStyleId: req.body.hairStyleId,
//                 time: req.body.time,
//               });
//               return res.status(200).json({ message : 'Alright we got it!!'});
//             }
//           });
//       })
//       .catch((err) => {
//         db.collection("barbers")
//           .add({
//             barberName: req.body.barberName,
//             createAt: new Date().toISOString(),
//             shopId: req.shop.shopId,
//             phoneNum: req.body.phoneNum,
//             hairAble : 
//           })
//           .then((data) => {
//             return db.collection("hairBarbers").add({
//               barberId: data.id,
//               hairStyleId: req.body.hairStyleId,
//               time: req.body.time,
//             });
//           });
//         return res.status(200).json({ error: "good" });
//       });
//   };

  //docdoc.data().hairAble.forEach((hair) => {
    //db.collection('hairstyle').where('shopId','==',req.shop.shopId).get()
    //.then((dataQ) => {
    //  dataQ.forEach((docdocdoc) => {
    //     docdocdoc.data().hair.forEach((kuy) => {
      // if(kuy.hairId === hair.hairId ){
        // return  dataDD. push(dataDD)
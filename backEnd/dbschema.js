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
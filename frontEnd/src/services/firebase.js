import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCCLyxdu81oZoH18pYzIMlU5MxiWgLdxlw",
    authDomain: "noticedb-e2834.firebaseapp.com",
    databaseURL: "https://noticedb-e2834.firebaseio.com",
    projectId: "noticedb-e2834",
    storageBucket: "noticedb-e2834.appspot.com",
    messagingSenderId: "787150927782",
    appId: "1:787150927782:web:ecadaa2fb95ad7de55c167",
    measurementId: "G-RSJ214HR8N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const str = firebase.storage();

  export default firebase;
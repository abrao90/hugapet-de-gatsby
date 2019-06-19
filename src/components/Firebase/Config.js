import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyABH_ytk9BUTUy2X8u-Rj8aQUof-NAwvNg",
    authDomain: "hugapet-de.firebaseapp.com",
    databaseURL: "https://hugapet-de.firebaseio.com",
    projectId: "hugapet-de",
    storageBucket: "hugapet-de.appspot.com",
    messagingSenderId: "593048821818",
    appId: "1:593048821818:web:b8a1a532420b8506"
  }
  
  const firebaseConf = firebase.initializeApp(config);


  export default firebaseConf;
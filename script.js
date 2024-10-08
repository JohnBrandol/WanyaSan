
// Importar funções necessárias do Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAeKROa0FkYL03R1-vGt34l5t8Cxn6f7MI",
  authDomain: "mamae-e5e58.firebaseapp.com",
  projectId: "mamae-e5e58",
  storageBucket: "mamae-e5e58.appspot.com",
  messagingSenderId: "102550491819",
  appId: "1:102550491819:web:0c4d848ff498d23f219dee",
  measurementId: "G-BK941ZZQS9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  

  //var para requerimento de login de usuario farebaseIU
  var firebase = require('firebase');
  var firebaseui = require('firebaseui');

  // Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ]
});
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
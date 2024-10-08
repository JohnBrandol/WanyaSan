
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
  
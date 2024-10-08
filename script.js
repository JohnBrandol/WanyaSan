// Importa as funções necessárias do Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider, EmailAuthProvider } from 'firebase/auth';
import firebaseui from 'firebaseui';

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

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função de Login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Bem-vindo, " + user.email);
      // Redireciona ou exibe conteúdo
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Erro: " + errorMessage);
    });
}

// Função de Cadastro
function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Cadastro bem-sucedido, bem-vindo " + user.email);
      // Redireciona ou exibe conteúdo
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Erro: " + errorMessage);
    });
}

// Configurações do FirebaseUI
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // Redireciona o usuário ou retorna `true` para redirecionamento automático
      return true;
    },
    uiShown: function() {
      // A UI foi renderizada, oculta o loader
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: '/', // URL para onde o usuário será redirecionado após o login
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/terms-of-service',  // URL para os Termos de Serviço
  privacyPolicyUrl: '/privacy-policy'  // URL para a Política de Privacidade
};

// Inicializa FirebaseUI com o Firebase Auth
const ui = new firebaseui.auth.AuthUI(auth);

// A UI espera o DOM carregar
ui.start('#firebaseui-auth-container', uiConfig);

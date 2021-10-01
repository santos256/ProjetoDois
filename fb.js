// Conexão com o FireBase
const firebaseConfig = {
    apiKey: "AIzaSyC8gi_wDO-RGK-txhy74tRXAVyc73jOfI4",
    authDomain: "projetoum-d38b6.firebaseapp.com",
    projectId: "projetoum-d38b6",
    storageBucket: "projetoum-d38b6.appspot.com",
    messagingSenderId: "138745288607",
    appId: "1:138745288607:web:b228ebff02ef0835018faa"
};

// Initializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
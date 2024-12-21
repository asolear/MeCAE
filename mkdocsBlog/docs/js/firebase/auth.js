// Importa las funciones necesarias desde Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDY1GhUR47WGpJcNhpq2gPTOKIyCJ1_oaw",
    authDomain: "prueba-440b0.firebaseapp.com",
    projectId: "prueba-440b0",
    storageBucket: "prueba-440b0.appspot.com",
    messagingSenderId: "799443941595",
    appId: "1:799443941595:web:6d12fa146ec1308a20f4fe",
    measurementId: "G-W9NBWXRCCF"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para iniciar sesión
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('user-email').innerText = `Bienvenido, ${user.email}`;
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('user-info').style.display = 'block';
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Función para registrarse
document.getElementById('signup-button').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Usuario creado: ' + user.email);
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Función para cerrar sesión
document.getElementById('logout-button').addEventListener('click', () => {
    signOut(auth).then(() => {
        document.getElementById('auth-container').style.display = 'block';
        document.getElementById('user-info').style.display = 'none';
    });
});

// Monitorea el estado de la autenticación
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('user-email').innerText = `Bienvenido, ${user.email}`;
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
    } else {
        document.getElementById('auth-container').style.display = 'block';
        document.getElementById('user-info').style.display = 'none';
    }
});
// Importa el SDK de Firebase en tu proyecto

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO",
    projectId: "TU_ID_DE_PROYECTO",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
  };
  
  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Inicializa el servicio de autenticación
  const auth = firebase.auth();
  
  // Manejar el evento de formulario
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        document.getElementById('status').textContent = "¡Sesión iniciada!";
      })
      .catch((error) => {
        document.getElementById('status').textContent = "Error: " + error.message;
      });
  });
  
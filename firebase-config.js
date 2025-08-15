// firebase-config.js
if (!window.firebaseInitialized) {
  const firebaseConfig = {
    apiKey: "AIzaSyAV7r-rjXo6U62LX1AA7c7DAHb8GhOOOsg",
    authDomain: "saigon-dalat.firebaseapp.com",
    databaseURL: "https://saigon-dalat-default-rtdb.firebaseio.com",
    projectId: "saigon-dalat",
    storageBucket: "saigon-dalat.appspot.com",
    messagingSenderId: "339735183485",
    appId: "1:339735183485:web:bc23cd740104d272577114"
  };
  firebase.initializeApp(firebaseConfig);
  window.firebaseInitialized = true;
}

// Chỉ gán 1 lần duy nhất
if (!window.db) {
  window.db = firebase.database();
}

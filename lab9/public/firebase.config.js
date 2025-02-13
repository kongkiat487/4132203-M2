// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyDUJp5U_dFmZaf5eyKWihAadxFe4AjHJlQ",
  authDomain: "kongtest-038.firebaseapp.com",
  projectId: "kongtest-038",
  storageBucket: "kongtest-038.firebasestorage.app",
  messagingSenderId: "133855741297",
  appId: "1:133855741297:web:d9d9275b8f0a3c09be22d0",
  measurementId: "G-L7R8WHL2NS"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}
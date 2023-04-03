// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyDHQUUvnZhyncGdttYPgyHAKcgaPHVVfJk",
  authDomain: "just-todo-it-94528.firebaseapp.com",
  projectId: "just-todo-it-94528",
  storageBucket: "just-todo-it-94528.appspot.com",
  messagingSenderId: "552212932229",
  appId: "1:552212932229:web:b7f4fb0e696116c65dabec"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
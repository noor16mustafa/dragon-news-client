// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCstXbY8QzJYBiLlB2xlMqcv3EY7a9ilT4",
    authDomain: "dragon-news-client-76127.firebaseapp.com",
    projectId: "dragon-news-client-76127",
    storageBucket: "dragon-news-client-76127.appspot.com",
    messagingSenderId: "257903374134",
    appId: "1:257903374134:web:a401a152ff9153b64b8d97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
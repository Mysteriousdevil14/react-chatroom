import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyjnfQGCb7hIEqpOhfbxnh9lNauIR0AhE",
  authDomain: "react-chat-app-44d0d.firebaseapp.com",
  databaseURL: "https://react-chat-app-44d0d-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-44d0d",
  storageBucket: "react-chat-app-44d0d.appspot.com",
  messagingSenderId: "602191531731",
  appId: "1:602191531731:web:98fffdcbe6ef0580c50e26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

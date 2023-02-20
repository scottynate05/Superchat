import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCtsyYLKRXANTAJ38GbU3-CCa1tiwMB-Pc",
  authDomain: "chat-7099f.firebaseapp.com",
  projectId: "chat-7099f",
  storageBucket: "chat-7099f.appspot.com",
  messagingSenderId: "883592581289",
  appId: "1:883592581289:web:33fa4183014747607b99b8",
  measurementId: "G-40B1B5DFJL"
})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;

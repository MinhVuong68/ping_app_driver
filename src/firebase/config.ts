import * as React from 'react';
import { initializeApp } from "firebase/app";

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbp05ZsqE2Apt3qP6tkTAT3pIVx9AYKIs',
  databaseURL: 'https://ping-5ccd1-default-rtdb.asia-southeast1.firebasedatabase.app',
  authDomain: 'ping-5ccd1.firebaseapp.com',
  projectId: 'ping-5ccd1',
  storageBucket: 'ping-5ccd1.appspot.com',
  messagingSenderId: '482812706701',
  appId: '1:482812706701:web:a26868ca519a300d0607c4',
  measurementId: 'G-5PGQRR9FRZ',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default () => {
  return { firebase, auth,firestore};
};

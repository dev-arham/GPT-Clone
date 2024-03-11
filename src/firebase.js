import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCXfzg-xv0Kj-7BmcLAe40riXk9vBRnQFs",
  authDomain: "systech-e3f5a.firebaseapp.com",
  projectId: "systech-e3f5a",
  storageBucket: "systech-e3f5a.appspot.com",
  messagingSenderId: "191755327483",
  appId: "1:191755327483:web:86de1a7fa9d8b6c0b49d5e",
  measurementId: "G-GCV081K5K9"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}

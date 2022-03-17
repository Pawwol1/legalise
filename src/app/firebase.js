import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD58xzkikXXLe-R0xriDhjs2SDd4amf5WY",
    authDomain: "legalise-3574c.firebaseapp.com",
    projectId: "legalise-3574c",
    storageBucket: "legalise-3574c.appspot.com",
    messagingSenderId: "1052402813104",
    appId: "1:1052402813104:web:737781530c75b98aa49375"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
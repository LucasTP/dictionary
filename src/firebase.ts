import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config/firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

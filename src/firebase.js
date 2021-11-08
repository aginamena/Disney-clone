
import { initializeApp } from "@firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAn-UfEG80LIHw1GN3QTLMJoEDHnmoswH8",
    authDomain: "disney-clone-ab2cc.firebaseapp.com",
    projectId: "disney-clone-ab2cc",
    storageBucket: "disney-clone-ab2cc.appspot.com",
    messagingSenderId: "1062683932289",
    appId: "1:1062683932289:web:b799e1f45ade4f968e7f80",
    measurementId: "G-Z15PM4R94W"
};

const firebaseApp = initializeApp(firebaseConfig); //initilize firebase
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();


export { auth, provider, storage };
export default db;
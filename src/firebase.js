
import { initializeApp } from "@firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { getStorage } from "@firebase/storage";

//we want access to the firesbase
// const firebaseConfig = {
//     apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//     authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//     projectId: "disneyplus-clone-a33d5",
//     storageBucket: "disneyplus-clone-a33d5.appspot.com",
//     messagingSenderId: "37918794208",
//     appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//     measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
    apiKey: "AIzaSyAn-UfEG80LIHw1GN3QTLMJoEDHnmoswH8",
    authDomain: "disney-clone-ab2cc.firebaseapp.com",
    projectId: "disney-clone-ab2cc",
    storageBucket: "disney-clone-ab2cc.appspot.com",
    messagingSenderId: "1062683932289",
    appId: "1:1062683932289:web:b799e1f45ade4f968e7f80",
    measurementId: "G-Z15PM4R94W"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBl5EvM76Gt4vvXbvUFq5FcYNzp4ywdrII",
//     authDomain: "testproject-c8c95.firebaseapp.com",
//     projectId: "testproject-c8c95",
//     storageBucket: "testproject-c8c95.appspot.com",
//     messagingSenderId: "685907669524",
//     appId: "1:685907669524:web:52e37bb1f69c79aee26d01",
//     measurementId: "G-K4P6Q913HZ"
// };

const firebaseApp = initializeApp(firebaseConfig); //initilize firebase
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();


export { auth, provider, storage };
export default db;
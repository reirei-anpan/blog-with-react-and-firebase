import { initializeApp } from "firebase/app";
import{ getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh6_VJthhJkogAv05ti2oUaKjCSni5DR4",
  authDomain: "blog-with-react-and-fire-cb72b.firebaseapp.com",
  projectId: "blog-with-react-and-fire-cb72b",
  storageBucket: "blog-with-react-and-fire-cb72b.appspot.com",
  messagingSenderId: "162133664381",
  appId: "1:162133664381:web:3b0ce1d280ec38ad224714"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
const db = getFirestore(app);

export { auth, provider, db };
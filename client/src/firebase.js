import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDUr4-33w8ivGbnz6fCJP7bLYTUaRD9hM4",
  authDomain: "food-32674.firebaseapp.com",
  projectId: "food-32674",
  storageBucket: "food-32674.appspot.com",
  messagingSenderId: "528149903196",
  appId: "1:528149903196:web:17c2e68e690b99701f7399",
  measurementId: "G-L6V2MDJ1FS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }
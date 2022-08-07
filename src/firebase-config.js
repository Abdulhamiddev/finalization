import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBwt0BzhvsqSWMw6docDVs7RI9gmmQy900",
  authDomain: "videoapp-96cd4.firebaseapp.com",
  databaseURL: "https://videoapp-96cd4-default-rtdb.firebaseio.com",
  projectId: "videoapp-96cd4",
  storageBucket: "videoapp-96cd4.appspot.com",
  messagingSenderId: "1014779720756",
  appId: "1:1014779720756:web:79d675d655230acd2b4661",
};

export const firebaseApp = initializeApp(firebaseConfig);

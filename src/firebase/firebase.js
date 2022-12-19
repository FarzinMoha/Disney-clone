import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM3FqrSzWuv0Nq01qqpOMdPEjwxKr2YCs",
  authDomain: "disneyplus-9260a.firebaseapp.com",
  projectId: "disneyplus-9260a",
  storageBucket: "disneyplus-9260a.appspot.com",
  messagingSenderId: "977137922524",
  appId: "1:977137922524:web:0aff8a7fd3f3742f5cdf19",
  measurementId: "G-5HT71SLMXM",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutUser = async () => await signOut(auth);

export const db = getFirestore();

// export const fetchData = (
//   recommend = [],
//   news = [],
//   original = [],
//   trending = []
// ) => {
//   db.collection("movies").onSnapshot((snapshot) => {
//     snapshot.docs.map((doc) => {
//       switch (doc.data().type) {
//         case "recommend":
//           recommend.push({ id: doc.id, ...doc });
//           break;
//         case "new":
//           news.push({ id: doc.id, ...doc });
//           break;
//         case "recommend":
//           recommend.push({ id: doc.id, ...doc });
//           break;
//         case "original":
//           original.push({ id: doc.id, ...doc });
//           break;
//         case "trending":
//           trending.push({ id: doc.id, ...doc });
//           break;
//       }
//     });
//   });
// };

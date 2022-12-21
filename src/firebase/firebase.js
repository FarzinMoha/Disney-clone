import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

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

export const getCategoriesAndDocuments = async () => {
  const movie = {
    recommend: [],
    new: [],
    original: [],
    trending: [],
  };
  const collectionRef = collection(db, "movie");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { type } = docSnapshot.data();
    const prevState = movie[type];
    prevState.push({ id: docSnapshot.id, ...docSnapshot.data() });
    return movie;
  }, {});

  return categoryMap;
};

export const getMovie = async (idMovie) => {
  const movie =[]
  const collectionRef = collection(db, "movie");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const data = docSnapshot.data();
    if (docSnapshot.id === idMovie) {
      movie.push(data)
    }
    return movie;
  }, {});

  return categoryMap;
};

import { initializeApp, FirebaseError } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  setDoc,
} from "firebase/firestore/lite";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { IUser } from "./context/UserContext";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");
const userCollectionRef = collection(db, "users");

export async function getVans() {
  try {
    const querySnapshot = await getDocs(vansCollectionRef);
    const dataArr = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return dataArr;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw {
        message: error.message,
        statusText: error.name,
        status: error.code,
      };
    }
  }
}

export async function getVan(id: string) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(
    vansCollectionRef,
    where("hostId", "==", auth.currentUser?.uid)
  );
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

export async function loginUser(creds: {
  email: string;
  password: string;
}): Promise<IUser | undefined> {
  try {
    const userCreds = await signInWithEmailAndPassword(
      auth,
      creds.email,
      creds.password
    );

    const docRef = doc(userCollectionRef, userCreds.user.uid);
    const userSnapshot = await getDoc(docRef);
    const userData = userSnapshot.data() as IUser;

    return { ...userData, uid: userSnapshot.id };
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw {
        message: error.message,
        statusText: error.name,
        status: error.code,
      };
    }
  }
}

export async function registerUser(creds: {
  name: string;
  dateOfBirth: number;
  email: string;
  password: string;
}) {
  try {
    const userCreds = await createUserWithEmailAndPassword(
      auth,
      creds.email,
      creds.password
    );

    const userDoc = doc(userCollectionRef, userCreds.user.uid);

    await setDoc(userDoc, {
      name: creds.name,
      email: creds.email,
      dateOfBirth: creds.dateOfBirth,
      isHost: false,
    });

    return userCreds.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw {
        message: error.message,
        statusText: error.name,
        status: error.code,
      };
    }
  }
}

export async function signOutuser() {
  try {
    await signOut(auth);
    localStorage.removeItem("vanLifeUser");
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw {
        message: error.message,
        statusText: error.name,
        status: error.code,
      };
    }
  }
}

// #region MirageJS apis

// export async function getVans(id?: string | undefined) {
//   const url = id ? `/api/vans/${id}` : "/api/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

// export async function getHostVans(id?: string | undefined) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return id ? data.vans[0] : data.vans;
// }

// export async function loginUser(creds: { email: string; password: string }) {
//   const res = await fetch("/api/login", {
//     method: "post",
//     body: JSON.stringify(creds),
//   });
//   const data = await res.json();

//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   return data;
// }

// #endregion

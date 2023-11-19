import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDWR_7oEkWfvUF12xZIMM_HTvK3wbhK7ns",
	authDomain: "elite-events-1126c.firebaseapp.com",
	projectId: "elite-events-1126c",
	storageBucket: "elite-events-1126c.appspot.com",
	messagingSenderId: "8741760771",
	appId: "1:8741760771:web:749a843a7bd2521738c336",
	measurementId: "G-RXGZKBCX5J"
  };

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { provider, auth, storage };
export default db;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAt8kEu6Opexqm_RJQhra7DyZLFj_ugeR8",
  authDomain: "tekin-e6726.firebaseapp.com",
  projectId: "tekin-e6726",
  storageBucket: "tekin-e6726.appspot.com",
  messagingSenderId: "1077436728073",
  appId: "1:1077436728073:web:3fb5b31be25f031467c9d8",
  measurementId: "G-W0TVK8REY0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

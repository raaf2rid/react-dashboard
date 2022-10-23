import {initializeApp} from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyAsbnObhYoaKQGwC6C593PXBiFFm_AkVE8",
  authDomain: "mileprix-devauth.firebaseapp.com",
  projectId: "mileprix-devauth",
  storageBucket: "mileprix-devauth.appspot.com",
  messagingSenderId: "509948173719",
  appId: "1:509948173719:web:048196f21330918d4278d2"
};


export const app = initializeApp(firebaseConfig)


export default app

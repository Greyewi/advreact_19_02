import firebase from 'firebase'

export const appName = 'advreact'

const firebaseConfig = {
  apiKey: "AIzaSyAMJf7omlt1wn2sNdkf4VcC6uEif38rboI",
  authDomain: "advreact-6ec77.firebaseapp.com",
  databaseURL: "https://advreact-6ec77.firebaseio.com",
  projectId: "advreact-6ec77",
  storageBucket: "advreact-6ec77.appspot.com",
  messagingSenderId: "873873306038",
  appId: "1:873873306038:web:8e5a331e616864c83d1117"
};

firebase.initializeApp(firebaseConfig)

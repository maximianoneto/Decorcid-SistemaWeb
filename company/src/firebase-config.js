const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyDp7Q0q13iuwDCZbDyXamCH7PEKZyMNyk8",
    authDomain: "decorcid-d2446.firebaseapp.com",
    databaseURL: "https://decorcid-d2446.firebaseio.com",
    projectId: "decorcid-d2446",
    storageBucket: "decorcid-d2446.appspot.com",
    messagingSenderId: "1037668960083",
    appId: "1:1037668960083:web:a039321986ddbb0d0483a6",
    measurementId: "G-0LZT186L79"
  }
  // Initialize Firebase
  const app = firebase.initializeApp(FirebaseConfig)
  firebase.analytics()

  
  const config = Rebase.createClass(app.database())

  
  export const storage = app.storage()
  export const auth = app.auth()
  export default config
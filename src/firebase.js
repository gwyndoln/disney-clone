import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCvOxzivOd5A0Hr_tjLav3M3qTDxh6x3TI',
  authDomain: 'disney-clone-468ca.firebaseapp.com',
  projectId: 'disney-clone-468ca',
  storageBucket: 'disney-clone-468ca.appspot.com',
  messagingSenderId: '1059512433275',
  appId: '1:1059512433275:web:b50842158e59a6584540de',
  measurementId: 'G-W9B7WL55VP',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }

export default db

import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '../config/.env.firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase.firestore()

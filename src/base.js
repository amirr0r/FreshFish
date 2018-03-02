import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEkH5-j16Sv5xvWD5f7MzBK2gXKPL-OAQ",
  authDomain: "my-first-react-app-d88ce.firebaseapp.com",
  databaseURL: "https://my-first-react-app-d88ce.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
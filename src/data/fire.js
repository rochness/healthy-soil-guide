import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCrVvgz6WMbI-yEgCjXRq7VC9a6a9r9aWw",
  authDomain: "healthy-soil.firebaseapp.com",
  databaseURL: "https://healthy-soil.firebaseio.com",
  projectId: "healthy-soil",
  //messagingSenderId: "982739755884"
};
var fire = firebase.initializeApp(config);
export default fire;
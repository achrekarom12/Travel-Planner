const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdH-wug_QYRUZ9cQWmq7JAlM4arbBGc-g",
    authDomain: "internet-programming-844f8.firebaseapp.com",
    databaseURL: "https://internet-programming-844f8-default-rtdb.firebaseio.com",
    projectId: "internet-programming-844f8",
    storageBucket: "internet-programming-844f8.appspot.com",
    messagingSenderId: "969473386558",
    appId: "1:969473386558:web:34dbdc525f83140893496f"
})
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const signUp = () => {
    const logIn = (email, password) => {
        //const email = document.getElementById('logname').value.trim()
        //const password = document.getElementById('logpass').value
        //document.getElementById('login-btn').innerHTML = 'loging...'
        firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // location.href = "http://127.0.0.1:5500/planets_page.html"
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(error.message)
        //document.getElementById('login-btn').innerHTML = 'login'
      });
    }
  const email = document.getElementById('email-box').value.trim()
  const password = document.getElementById('pass-box').value
  console.log(password)
  if(password.match('[0-9]') && password.match('[a-z]') && password.match('[A-Z]') && (password.match('[@_]'))) {
    //document.getElementById('reg-btn').innerHTML = 'registering...'
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      alert('Registration Successful!')
    //   location.href = "http://127.0.0.1:5500/index.html"
      logIn(email, password)
      // ...
    })
    .catch((error) => {
      alert(error.message)
      //document.getElementById('reg-btn').innerHTML = 'register'
    });
  }
  else alert('Password must have one special character (@, _, one uppercase, one lowercase)')
}
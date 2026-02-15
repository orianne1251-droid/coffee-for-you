// --- הגדרות חיבור ל-Firebase ---
const firebaseConfig = {
    apiKey: "AIzaSyC85iJSE3dSIDtend9nnoWj3M4ZAGSHhNc",
    authDomain: "test-233ee.firebaseapp.com",
    databaseURL: "https://test-233ee-default-rtdb.firebaseio.com",
    projectId: "test-233ee",
    storageBucket: "test-233ee.firebasestorage.app",
    messagingSenderId: "957674665086",
    appId: "1:957674665086:web:44692a62e45c05ed55942f"
  };

app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log(auth)

var DISTANCEREF = firebase.database().ref("/fromAltera/A");
DISTANCEREF.on('value', reciveData );

function reciveData(snapshot) {
    const data = snapshot.val();
    if (data > 35) {
      document.getElementById("distanceImg").src = "./sad.png"
      document.getElementById("distanceText1").innerText = "שים/י את הכוס במכונה!☕";
      document.getElementById("distanceText2").innerText ="הכוס רחוקה מידי מהמכונה😞";
      document.getElementById("addbutton").innerText ='';
    } else {
      document.getElementById("distanceImg").src = "./happy.png"
      document.getElementById("distanceText1").innerText = "הכוס במיקום מצוין!☕";
      document.getElementById("distanceText2").innerText = "לחץ על הכפתור לבחירת הקפה😝";
      document.getElementById("addbutton").innerHTML ='<button class="btn btn-browner" onclick="gotomake()">לחץ כאן</button>';
    }
    console.log(data)
}


//פונקצייה לכניסה למערכת עם משתמש חדש
function saveUser() {
  email = document.getElementById("email1").value
  password = document.getElementById("password1").value
  passwordcheck = document.getElementById("passwordcheck").value
  checkbox = document.getElementById("Check")
  birthdate = document.getElementById("birthDate").value 

  emailwrong = document.getElementById('emailwrong')
  passwordwrong1 = document.getElementById('passwordwrong1')
  passwordwrong2 = document.getElementById('passwordwrong2')
  nonebirthdate = document.getElementById('nonebirthdate')
  notchecked = document.getElementById('notchecked')

  
  /*איפוס הודעות שגיאה*/ 
  document.getElementById("alartsignin").style.display = "none"
  emailwrong.innerHTML = ""
  passwordwrong1.innerText = ""
  passwordwrong2.innerText = ""
  nonebirthdate.innerText = ""

  if (
    email==''|| //בודקים רק אימייל כי הסיסמאות צריכות להיות גם ככה יותר מ8 תווים ושוות
    password !== passwordcheck ||       
    password.length < 8 ||              
    email.indexOf('@') === -1 ||        
    email.indexOf('.') < email.indexOf('@')||
    (!checkbox.checked) ||
    birthdate=='') {
      document.getElementById("alartsignin").style.display = "block"
      if (email==''||
        email.indexOf('@') === -1 ||
        email.indexOf('.') < email.indexOf('@')){
            emailwrong.innerText = "האימייל לא תקין"
      }
      if (password.length < 8){
            passwordwrong1.innerText = "הסיסמה חייבת להכיל לפחות 8 תווים"
      } 
      if(password !== passwordcheck){
            passwordwrong2.innerText = "הסיסמאות שונות"  
      }
      if(birthdate==''){
            nonebirthdate.innerText = "בחר תאריך לידה" 
      }
      if(!checkbox.checked){
            notchecked.innerText = "אשר תנאי שימוש"
      }
      return
  }

  //שמירת המשתמש בFIREBASE
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log(user.uid)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
    });
  
  
  
  
  
  /*סגירת המודל הירשמות*/
  signinModalcheck = document.getElementById('signinModal')
  signinModal = bootstrap.Modal.getInstance(signinModalcheck)
  signinModal.hide();
  window.location.href = './discheck.html';

  /*איפוס השדות*/
  document.getElementById("email1").value = ''
  document.getElementById("password1").value = ''
  document.getElementById("passwordcheck").value = ''
  checkbox.checked = false;
  document.getElementById("birthDate").value = ''

}

          
function logIn(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // הסתרת השגיאה בתחילת ניסיון ההתחברות
  document.getElementById("alartlogin").style.display = "none";

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      // איפוס שדות שגיאה
      document.getElementById("email").value = '';
      document.getElementById("password").value = '';
      // סגירת המודל התחברות (אם פתוח)
      const loginModalEl = document.getElementById('loginModal');
      const loginModal = bootstrap.Modal.getInstance(loginModalEl);
      if (loginModal) loginModal.hide();
      window.location.href = './discheck.html';
    })
    .catch((error) => {
      console.log(error.message);
      // הצגת ההודעה הנכונה מה‑HTML
      document.getElementById("alartlogin").style.display = "block";
    });
}


function logout(){
  window.location.href = './index.html';
}

function gotomake(){
  window.location.href = './make.html';
}








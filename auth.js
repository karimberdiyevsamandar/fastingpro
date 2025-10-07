
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { firebaseConfig } from './firebase-config.js';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById('btnEmailLogin')?.addEventListener('click', async ()=>{
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;
  try{ await signInWithEmailAndPassword(auth, email, pass); location.href='index.html'; }catch(e){ alert(e.message); }
});
document.getElementById('btnGoogle')?.addEventListener('click', async ()=>{
  try{ await signInWithPopup(auth, new GoogleAuthProvider()); location.href='index.html'; }catch(e){ alert(e.message); }
});

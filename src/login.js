import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/userSlice';
import './login.css';

function Login() {
  const [name, setName] = useState('');
   const [profilePic, setProfilePic] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const dispatch = useDispatch();

   const loginToApp = (e) => {
      //logic to login the user
      e.preventDefault()
      auth.signInWithEmailAndPassword(email,password).then((userAuth) =>{
          dispatch(login(
            {
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName
            }
          ))
      }).catch((error) => alert(error.message))
   }
   const register = () => {
    //logic to register the user
    if(!name){
      return alert('please enter your full name')
    }
    
    auth.createUserWithEmailAndPassword(email,password).then((userAuth) =>{
      console.log(userAuth)
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName
      }))
    }).catch((error) => alert(error))
  }
  
  return (
      <div className='login_container'>
        <img src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png' alt='' />
        <form >
            <input value={name} onChange={(e) => setName(e.target.value) } type='text' placeholder='Full Name Required if registering'/>
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value) } type='text' placeholder='Profile Pic (Optional)'/>
            <input value={email} onChange={(e) => setEmail(e.target.value) } type='email' placeholder='Email'/>
            <input value={password} onChange={(e) => setPassword(e.target.value) } type='password' placeholder='Password'/>
            <button onClick={loginToApp} type='submit' >Sign In</button>
        </form>
        <p>Not a member? <span onClick={register} className='register_option'>Register Now.</span></p>
      </div>
  


  )
}

export default Login

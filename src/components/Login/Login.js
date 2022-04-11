import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  const handleEmailBlur = event =>{
    setEmail(event.target.value)
  }
  const handlePasswordBlur = event =>{
    setPassword(event.target.value)
  }
  if(user){
    navigate(from, {replace:true})
  }
  const handleUserSingIn = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='form-container'>
     <div>
     <h2 className='form-title'>Login</h2>
      <form onSubmit={handleUserSingIn}>
      <div className="input-group">
       <label htmlFor="email">Email</label>
       <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
     </div>
     <div className="input-group">
       <label htmlFor="password">Password</label>
       <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
     </div>
     <p style={{color: 'red'}}>{error?.message}</p>
     {
       loading && <p>Loading..</p>
     }
     <input className='form-login' type="submit" value="Login" />
      </form>
      <p className='link'>
        New to ema-john? <Link className='form-link' to='/signup'>Create an account</Link>
      </p>
      <div className='title'>
        <hr />
        or
        <hr />
      </div>
      <button className='form-google'><img src="https://img.freepik.com/free-psd/google-icon-isolated_68185-565.jpg?size=626&ext=jpg&ga=GA1.2.142737712.1632825724" alt="" />Continue With Google</button>
     </div>
    </div>
  );
};

export default Login;
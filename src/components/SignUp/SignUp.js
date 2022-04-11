import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
  const navigate = useNavigate();

  const handleEmailBlur = event =>{
    setEmail(event.target.value)
  }
  const handlePasswordBlur = event =>{
    setPassword(event.target.value)
  }
  const handleConfirmPasswordBlur = event =>{
    setConfirmPassword(event.target.value)
  }

  if(user){
    navigate('/shop')
  }

  const handleCreateUser = event =>{
    event.preventDefault()
    if(password !== confirmPassword){
      setError("Your two passwords didn't match")
      return;
    }
    
    if(password.length < 6){
      setError('password must be 6 characters or longer')
      return;
    }

    createUserWithEmailAndPassword(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    });
  }
  return (
    <div className='form-container'>
    <div>
    <h2 className='form-title'>Sign Up</h2>
     <form onSubmit={handleCreateUser}>
     <div className="input-group">
      <label htmlFor="email">Email</label>
      <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
    </div>
    <div className="input-group">
      <label htmlFor="password">Password</label>
      <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
    </div>
    <div className="input-group">
      <label htmlFor="confirm-password">Confirm-Password</label>
      <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
    </div>
    <p style={{color: 'red'}}>{error}</p>
    <input className='form-login' type="submit" value="Sign Up" />
     </form>
     <p className='link'>
       Already have an account? <Link className='form-link' to='/login'>Login</Link>
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

export default SignUp;
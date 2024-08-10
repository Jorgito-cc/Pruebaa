import React from 'react';
import './Login.css'; 
import { useState } from 'react';
import { Home } from '../Homee/Home';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loginSuccessful,setLoginSuccessful] = useState(false) ; 

  
  const handleLogin = (e) => {
      e.preventDefault(); 
      // inec
    /*   console.log('hooalaaa');
      console.log({
          username: username,
          password: password
      }); */
      const data = {
          username: username,
          password: password
      };
      fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
          console.log(result.token);
          if(result.token){
            localStorage.setItem('token',result.token)
            setLoginSuccessful(true) 
          }else{
            setLoginSuccessful(false ) ; 
          }
      })
      .catch(error => {
          console.log(error);
      });
  };
  

  return (
<> {loginSuccessful ? <Home/> :    
<div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-heading">Login</h2>
        <form className="login-form">
          <label htmlFor="username" className="login-label">Username</label>
          {/* con eso obtemos el valor del input  */}
          {/* con esos valores que recopilamos de los inmput mandamos al servidor  ..
              el servidor se encargaa de verfica si eso lo que mandamos en el punto#2 este en un base de datos
              si exite o no exite nos va a generar un token que bnnos va a permitir estar autenticado y va a mantener la ses  */}
          <input onChange={(event) => {setUsername(event.target.value)}}  type="text" id="username" className="login-input" placeholder="Enter your username" />
          <label htmlFor="password" className="login-label">Password</label>
          <input onChange={(event) => {setPassword(event.target.value)}}         type="password" id="password" className="login-input" placeholder="Enter your password" />
          <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>  }
</>
  );
};

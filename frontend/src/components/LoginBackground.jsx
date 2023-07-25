import React from 'react';
import HeaderLogin from './HeaderLogin';
import "../styles/LoginBackground.css";

function onChangeEmail() {

}

function onTouchShow() {
   console.log("Show span clicked");
   document.querySelector(".display-password").type = "HIDE";
}

export default function LoginBackground() {
   return(
      <section className='login-container'>
         <HeaderLogin />
         <div className="login-background">
            <div className='login-box'>
               <h1 className="login-header">Sign In</h1>
               <form method="post" className="login-form" action="">
                  <div className="email-container">
                     <div className="email-box">
                           <input type="text" name="email" className="email-input" placeholder="" onChange={onChangeEmail} autoComplete="email" required/>
                           <span className='email-placeholder'>Email or phone number</span>
                     </div>
                     <p className="email-error">Please enter a valid email address or phone number.</p>
                  </div>
                  <div className="password-container">
                     <div className="password-box">
                        <input type="password" className="password-input" onChange={onChangeEmail} placeholder="" required/>
                        <span className='password-placeholder'>Password</span>
                        <span className="display-password" onTouchEnd={onTouchShow}>SHOW</span>
                     </div>
                     <p className="password-error">Your password must contain between 4 and 60 characters.</p>
                  </div>
                  <button className="btn-submit" type="submit" onClick={() => alert('Submitting form...')}>Sign In</button>
                  <div className="help-section">
                     <div className="remember-section">
                        <input type="checkbox" name="rememberMe" className="remember-checkbox"/>
                        <span className="rememeber-label">Remember me</span>
                     </div>
                     <a href="/LoginHelp" className='login-help'>Need help?</a> 
                  </div>
               </form>
            </div>
         </div>
      </section>
   )
}
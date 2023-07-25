import React from 'react';
import HeaderSignup from './HeaderSignup';
import "../styles/SignupBackg.css"

export default function SignupBackground() {

   return (
      <section className="signup__background">
         <HeaderSignup />
         <section className="container">
            <h1 className="signup__info">Unlimited movies, TV shows and more</h1>
            <p className='signup__info1'>Watch anywhere. Cancel anytime.</p>
            <h3 className="signup__info2">Ready to watch? Enter your email to create or restart your membership.</h3>
            <section className="signup__box">
               <article className="signup__inputs">
                  <section className="signup__inputBox-container">
                     <section className="signup__inputBox">
                        <input type="text" name="email" minLength="5" maxLength="50" placeholder='' className="signup__email-input" required/>
                        <span className='signup__label'>Email Address</span>
                     </section>
                     <section className="signup__input-invalid">
                        <p className="invalid__msg valid">Email is required</p>
                     </section>
                  </section>
               </article>
               <button className='signup__submit'>Get Started<div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="arrow" data-name="ChevronRight" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></div></button>
            </section>
         </section>
      </section>
   )
};
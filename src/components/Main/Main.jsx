import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="container">
      <div className="container__logo">
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className="container__base">
        <div className="container__base--content">
          <h1>We're <span>coming</span><span>soon</span></h1>
          <p className="container__base--content_message">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <form className="container__base--content-email">
            <div className="email__box">
              <input className="email__box--input" type="text" placeholder="Email Address" />
              <div className="email__box--error">
                <img className="email__box--error-icon hidden" src="./images/icon-error.svg" alt="" />
              </div>
              <button><img src="./images/icon-arrow.svg" alt="" /></button>
            </div>
            <p className="container__base--content-email_error hidden">Please provide a valid email</p>
          </form>
        </div>
      </div>
      <div className="container__image">
        <img src="./images/hero-desktop.jpg" alt="" />
      </div>
    </main>
  );
}

export default Main;

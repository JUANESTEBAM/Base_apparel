import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError(true);
    } else {
      setError(false);
      // Handle form submission here
      console.log('Email submitted:', email);
    }
  };

  return (
    <main className="container">
      <div className="container__logo">
        <img src="./images/logo.svg" alt="Logo" />
      </div>
      <div className="container__base">
        <div className="container__base--content">
          <h1>
            We're <span>coming</span> <span>soon</span>
          </h1>
          <p className="container__base--content_message">
            Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our
            launch deals.
          </p>
          <form className="container__base--content-email" onSubmit={handleSubmit}>
            <div className="email__box">
              <input
                className="email__box--input"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="email__box--error">
                <img
                  className={`email__box--error-icon ${error ? '' : 'hidden'}`}
                  src="./images/icon-error.svg"
                  alt=""
                />
              </div>
              <button type="submit">
                <img src="./images/icon-arrow.svg" alt="" />
              </button>
            </div>
            <p className={`container__base--content-email_error ${error ? '' : 'hidden'}`}>
              Please provide a valid email
            </p>
          </form>
        </div>
      </div>
      <div className="container__image">
        <img src="./images/hero-desktop.jpg" alt="Hero" />
      </div>
      <footer className="attribution">
        <p className="attribution__text">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="https://github.com/giovanigomez1">Giovani</a>.
        </p>
      </footer>
    </main>
  );
}

export default App;
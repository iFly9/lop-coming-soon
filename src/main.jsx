import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <span className="spark">✳</span>
        <span className="top-label">A NEW WEBSITE IS ON ITS WAY</span>
      </header>

      <section className="hero">
        <div className="brand">
          <img className="logo lop" src="/lop-coming-soon/logos/logo.png" alt="LOP logo" />

        </div>
        <div className="rule"><span>✦</span></div>
        <p className="eyebrow">A new chapter begins</p>
        <h1>A new chapter is taking shape.</h1>
        <p className="description">Our website is being prepared. We look forward to welcoming you soon.</p>
        <div className="status"><i></i> LAUNCHING SOON</div>
        <a className="contact" href="mailto:annofbo.official@gmail.com">
          <span className="arrow">↗</span>
          <span><small>FOR ENQUIRIES</small><strong>annofbo.official@gmail.com</strong></span>
        </a>
      </section>

      <footer className="footer">
        <span>LOP</span>
        <span className="footer-center">COMING SOON <b>✳</b></span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

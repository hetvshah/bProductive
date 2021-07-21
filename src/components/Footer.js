import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          fontSize: '16px',
          textAlign: 'center',
          margin: '1vw auto',
        }}
      >
        bProductive © {new Date().getFullYear()}, made by {` `}
        <a
          style={{ color: '#ad0000', textDecoration: 'underline' }}
          href="https://hetvishah.netlify.app/"
          target="__blank"
          rel="noreferrer"
        >
          hetvi shah
        </a>
        ; built with
        {` `}
        <a
          style={{ color: '#ad0000', textDecoration: 'underline' }}
          href="https://create-react-app.dev/"
          target="__blank"
          rel="noreferrer"
        >
          react
        </a>
      </footer>
    </div>
  );
};

export default Footer;

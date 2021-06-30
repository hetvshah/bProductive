import React from 'react';

const Footer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <footer
        style={{
          fontSize: '16px',
          textAlign: 'center',
          margin: '1vw auto',
        }}
      >
        bProductive © {new Date().getFullYear()}
        {' Hetvi Shah'}
      </footer>
    </div>
  );
};

export default Footer;

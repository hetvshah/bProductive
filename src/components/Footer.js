import React from 'react';

const Footer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <footer
        style={{
          fontSize: '1vw',
          //   position: 'absolute',
          textAlign: 'center',
          //   bottom: '0',
          //   left: '0',
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

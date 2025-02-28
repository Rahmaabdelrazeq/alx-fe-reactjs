import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '15px', marginTop: '20px', borderTop: '1px solid #444', position: 'relative', bottom: '0', width: '100%' }}>
      <p style={{ margin: '0', fontSize: '0.9rem' }}>© 2025 My React App. All rights reserved.</p>
      <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#aaa' }}>
        <span style={{ marginRight: '15px' }}>Privacy Policy</span>
        <span style={{ marginRight: '15px' }}>Terms of Service</span>
        <span>Contact Us</span>
      </div>
    </footer>
  );
}

export default Footer;

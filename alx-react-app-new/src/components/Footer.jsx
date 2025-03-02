const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0
    }}>
      <p>&copy; {new Date().getFullYear()} My Favorite Cities. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

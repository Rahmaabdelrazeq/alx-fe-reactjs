const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#222', color: 'white', textAlign: 'center', padding: '10px', position: 'absolute', bottom: 0, width: '100%' }}>
      <p>&copy; {new Date().getFullYear()} My Favorite Cities. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

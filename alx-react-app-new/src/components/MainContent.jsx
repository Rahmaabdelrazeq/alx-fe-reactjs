const MainContent = () => {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#f4f4f4',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{ color: 'darkslategray', textAlign: 'center' }}>Welcome to My Favorite Cities</h2>
      <p style={{ fontSize: '18px', textAlign: 'center', maxWidth: '600px', lineHeight: '1.5' }}>
        Explore the most amazing cities around the world and discover hidden gems!
      </p>
    </main>
  );
};

export default MainContent;

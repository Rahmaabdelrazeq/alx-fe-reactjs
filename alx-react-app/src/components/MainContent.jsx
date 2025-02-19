function MainContent() {
    return (
        <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;

const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', margin: '10px' }}>
      <h2 style={{ color: 'darkorange', textAlign: 'center' }}>Welcome to My Travel Blog</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
        Explore the most beautiful cities around the world with me!
      </p>
    </main>
  );
};

export default MainContent;

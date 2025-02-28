import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '20px', margin: '10px 0', backgroundColor: '#f5f5f5', borderRadius: '5px', minHeight: '60vh' }}>
      <h2 style={{ color: '#333', marginBottom: '15px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Welcome to the Main Content</h2>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#444' }}>
        This is where all the primary content of our application will appear. We can add more components and content here.
      </p>
      <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
        <li style={{ margin: '8px 0', color: '#555' }}>New York</li>
        <li style={{ margin: '8px 0', color: '#555' }}>Paris</li>
        <li style={{ margin: '8px 0', color: '#555' }}>Tokyo</li>
        <li style={{ margin: '8px 0', color: '#555' }}>London</li>
      </ul>
    </main>
  );
}

export default MainContent;

import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '15px', backgroundColor: '#f5f5f5', margin: '10px 0', borderRadius: '5px' }}>
      <h2 style={{ color: '#333', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>Welcome to the Main Content</h2>
      <p style={{ lineHeight: '1.5', color: '#555' }}>
        This is where all the primary content of our application will appear. We can add more components and content here.
      </p>
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        <li style={{ margin: '5px 0' }}>New York</li>
        <li style={{ margin: '5px 0' }}>Paris</li>
        <li style={{ margin: '5px 0' }}>Tokyo</li>
        <li style={{ margin: '5px 0' }}>London</li>
      </ul>
    </main>
  );
}

export default MainContent;

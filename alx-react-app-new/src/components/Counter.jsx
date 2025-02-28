import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      margin: '20px', 
      padding: '20px', 
      borderRadius: '8px', 
      backgroundColor: '#f0f0f0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333' }}>Counter Application</h2>
      
      <p style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        margin: '20px',
        color: count > 0 ? 'green' : count < 0 ? 'red' : 'black'
      }}>
        Current Count: {count}
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#f44336', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)}
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#2196F3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
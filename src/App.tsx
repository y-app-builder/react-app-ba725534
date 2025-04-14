import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = (): void => {
    setCount(prevCount => prevCount - 1);
  };

  const resetCount = (): void => {
    setCount(0);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>Click Counter</h1>
      <div style={{ 
        fontSize: '5rem', 
        margin: '20px 0', 
        color: count > 0 ? 'green' : count < 0 ? 'red' : 'black' 
      }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={decrementCount} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '1rem', 
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
          onClick={resetCount} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '1rem', 
            backgroundColor: '#808080', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Reset
        </button>
        <button 
          onClick={incrementCount} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '1rem', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
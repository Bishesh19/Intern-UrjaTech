import { useState, useCallback, useEffect } from 'react';


function App() {
  // Fetch data from localhost:8000/api on page load
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/api/posts');
        const data = await response.json();
        console.log('Fetched posts:', data);
        
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    fetchData();
  }, []);

  

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Blog App</h1>
      
    </div>
  );
}

export default App;
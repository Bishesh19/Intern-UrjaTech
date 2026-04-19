import { useState, useCallback } from 'react';
import PostList   from './components/PostList';
import CreatePost from './components/CreatePost';

function App() {
  
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCreated = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Blog App</h1>
      <CreatePost onCreated={handleCreated} />
      <PostList key={refreshKey} onRefresh={handleCreated}/>
    </div>
  );
}

export default App;
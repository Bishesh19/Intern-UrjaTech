import { postsApi } from '../services/api';
import useFetch from '../hooks/useFetch';



function PostList({ onRefresh }) {
  const { data: posts, loading, error } = useFetch(() => postsApi.getAll());

  async function handleDelete(id) {
    if (!window.confirm('Delete this post?')) return;

    try {
      await postsApi.remove(id);
      onRefresh();
    } catch (err) {
      alert(err.message);
    }
  }

  if (loading) return <p>Loading posts...</p>;
  if (error)   return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!posts?.length) return <p>No posts found.</p>;



  return (
    <div>
      <h2>Blog Posts ({posts.length})</h2>
      {posts.map(post => (
        
        <div key={post._id} style={{ border: '1px solid #ddd', margin: '12px 0', padding: '16px', borderRadius: '8px' }}>
          <h3>{post.title}</h3>
          <p style={{ color: '#6b7280' }}>
            By {post.author} · {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <p>{post.content.substring(0, 150)}...</p>
          <div>
            {post.tags.map(tag => (
              <span key={tag} style={{ background: '#eff6ff', padding: '2px 8px', borderRadius: '12px', marginRight: '6px', fontSize: '12px' }}>
                {tag}
              </span>
            ))}
          </div>
          <button
  onClick={() => handleDelete(post._id)}
  style={{ background: '#fee2e2', color: '#991b1b', border: 'none', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer' }}
>
  Delete
</button>

        </div>
        
      ))}
    </div>
  );
}

export default PostList;
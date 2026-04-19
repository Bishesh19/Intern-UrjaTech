import { useState } from 'react';
import { postsApi } from '../services/api';


function CreatePost({ onCreated }) {
  const [form,    setForm]    = useState({ title: '', content: '', author: '', tags: '' });
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const postData = {
        ...form,
        // Convert comma-separated tags string to array
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      };

      await postsApi.create(postData);
      setForm({ title: '', content: '', author: '', tags: '' });
      onCreated(); // Tell parent to refresh the list
    } catch (err) {
      setError(err.message); // Server validation message shown to user
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
      <h2>Create Post</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <input name='title'   value={form.title}   onChange={handleChange} placeholder='Title'  style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
          <input name='author'  value={form.author}  onChange={handleChange} placeholder='Author' style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
          <textarea name='content' value={form.content} onChange={handleChange} placeholder='Content' rows={4} style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
          <input name='tags' value={form.tags} onChange={handleChange} placeholder='Tags (comma separated: node, express)' style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type='submit' disabled={loading} style={{ background: '#2563eb', color: 'white', padding: '8px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
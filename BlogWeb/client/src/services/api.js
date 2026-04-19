const BASE_URL = '/api';

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  const config = {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  };

  const response = await fetch(url, config);
  const data     = await response.json();

  
  if (!response.ok) {
    throw new Error(data.error || 'Something went wrong');
  }

  return data; 
}

// ─── Posts ───────────────────────────────────────────────
export const postsApi = {
  getAll:  (query = '') => request(`/posts${query}`),
  getById: (id)         => request(`/posts/${id}`),
  create:  (data)       => request('/posts', { method: 'POST', body: JSON.stringify(data) }),
  update:  (id, data)   => request(`/posts/${id}`, { method: 'PUT',  body: JSON.stringify(data) }),
  remove:  (id)         => request(`/posts/${id}`, { method: 'DELETE' }),
};

// ─── Users ───────────────────────────────────────────────
export const usersApi = {
  getAll:  ()     => request('/users'),
  getById: (id)   => request(`/users/${id}`),
  create:  (data) => request('/users', { method: 'POST', body: JSON.stringify(data) }),
  update:  (id, data) => request(`/users/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  remove:  (id)   => request(`/users/${id}`, { method: 'DELETE' }),
};
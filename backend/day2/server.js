// server.js
const express = require('express');
const app = express();

// Parse incoming JSON bodies automatically
// Without this, req.body is always undefined
app.use(express.json());

// ─── In-memory data store ──────────────────────────────
// Replace with MongoDB on Day 6. Shape stays identical.

let posts = [
  {
    id: 1,
    title: 'Getting Started with Node.js',
    content: 'Node.js is a JavaScript runtime built on Chrome V8 engine.',
    author: 'Yojjal',
    tags: ['node', 'javascript', 'backend'],
    createdAt: '2025-01-01T10:00:00Z',
  },
  {
    id: 2,
    title: 'Why Express Makes Life Easier',
    content: 'Express is a minimal web framework for Node.js applications.',
    author: 'Yojjal',
    tags: ['express', 'node', 'api'],
    createdAt: '2025-01-02T09:00:00Z',
  },
  {
    id: 3,
    title: 'Understanding REST APIs',
    content: 'REST stands for Representational State Transfer.',
    author: 'Student',
    tags: ['rest', 'api', 'web'],
    createdAt: '2025-01-03T11:00:00Z',
  },
];
let nextId = 4; // To keep track of the next post ID
app.get('/posts', (req, res) => {
  res.json(posts);
});

//return a single post by id
app.get('/posts/:id', (req, res) => {

    const Id = parseInt(req.params.id);

    const post = posts.find(p => p.id === Id);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
});

app.post('/posts', (req, res) => {
    const { title, content, author, tags } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ 
        error: 'Title, content, and author are required',
        required: ['title', 'content', 'author'],

    }
    );
}

    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        tags: tags || [],
        createdAt: new Date().toISOString()
    };
    posts.push(newPost);
    res.status(201).json(newPost);
    });

    app.put('/posts/:id', (req, res) => {
        const Id = parseInt(req.params.id);
        const postIndex = posts.findIndex(p => p.id === Id);
        if (postIndex === -1) {
            return res.status(404).json({ error: 'Post not found' });
        }   
        const { title, content, author, tags } = req.body;
        if (!title || !content || !author) {
            return res.status(400).json({   
            error: 'Title, content, and author are required',
            required: ['title', 'content', 'author'],
        });
    }
        const updatedPost = {
            id: Id,
            title,
            content,
            author,
            tags: tags || [],
            createdAt: new Date().toISOString()
        };
        posts[postIndex] = updatedPost;
        res.json(updatedPost);
    });
    app.delete('/posts/:id', (req, res) => {
    const Id = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === Id);
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    const deletedPosts = posts.splice(postIndex, 1)[0];
  
    res.json({ message: 'Post deleted successfully', post: deletedPosts });
});

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
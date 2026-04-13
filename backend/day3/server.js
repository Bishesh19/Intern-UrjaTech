const app = require('./app');

require('dotenv').config();
const connectDB = require('./db');

const PORT = process.env.PORT || 8000

connectDB().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
})
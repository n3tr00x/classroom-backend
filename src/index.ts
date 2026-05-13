import express from 'express';

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
	res.json({ message: 'Hello from Express server!' });
});

// Start server
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3000;

// Configure MySQL database connection with SSL
const pool = mysql.createPool({
    host: 'db-mysql-nyc3-74496-do-user-17659538-0.m.db.ondigitalocean.com',
    user: 'doadmin',
    password: '', // Consider using environment variables for sensitive data
    database: 'defaultdb',
    port: 25060,
    ssl: {
        rejectUnauthorized: true
    }
});

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:4200'] // Specify the domain of your frontend application
}));

const JWT_SECRET = 'your_jwt_secret';

app.post('/api/login', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    if (username === "Serina" && password === "Serina") {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        return res.json({ success: true, token: token });
    } else {
        return res.status(401).json({ error: "Invalid credentials" });
    }
});

app.get('/api/dashboard', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ success: true, message: "Access to dashboard confirmed!", user: decoded });
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

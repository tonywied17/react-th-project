const express = require('express');
const cors = require('cors');
const instaProfile = require('./instaProfile'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/instagram/:username', async (req, res) => {
    try {
        const username = req.params.username;

        // Fetch Instagram profile data
        const profileData = await instaProfile(username);

        // Log profile data
        console.log(profileData);

        // Respond with JSON data
        res.json(profileData);
    } catch (error) {
        console.error('Error fetching Instagram data:', error);
        res.status(500).json({ error: 'Failed to fetch Instagram data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

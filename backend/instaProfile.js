const axios = require('axios');

async function instaProfile(username) {
    try {
        const url = `https://www.instagram.com/${username}/?__a=1`;
        const response = await axios.get(url);

        if (response.status !== 200) {
            throw new Error('Failed to fetch Instagram data');
        }

        // Return the response data
        return response.data;
    } catch (error) {
        console.error('Error fetching Instagram data:', error);
        throw error;
    }
}

module.exports = instaProfile;

```javascript
// Import required packages
const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('./config');

// Define the base URL for the Alert API
const ALERT_BASE_URL = 'https://api.alert.com';

// Create an instance of axios with predefined settings
const alertApiClient = axios.create({
  baseURL: ALERT_BASE_URL,
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${config.ALERT_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// Function to send alert
const sendAlert = async (userId, message) => {
  try {
    const response = await alertApiClient.post(`/users/${userId}/alerts`, { message });
    return response.data;
  } catch (error) {
    console.error(`Failed to send alert to user ${userId}: ${error}`);
    return null;
  }
};

// Route to send alert
router.post('/:userId', async (req, res) => {
  try {
    const { message } = req.body;

    // Send alert to the user
    const alertResponse = await sendAlert(req.params.userId, message);

    if (!alertResponse) {
      return res.status(500).json({ error: 'Failed to send alert' });
    }

    // Return the response from the Alert API
    return res.json(alertResponse);
  } catch (error) {
    console.error(`Failed to send alert: ${error}`);
    return res.status(500).json({ error: 'An error occurred while trying to send alert' });
  }
});

// Export the router
module.exports = router;
```

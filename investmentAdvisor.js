```javascript
// Import required packages
const axios = require('axios');
const config = require('./config');

// Define the base URL for the Investment API
const INVESTMENT_BASE_URL = 'https://api.investment.com';

// Create an instance of axios with predefined settings
const investmentApiClient = axios.create({
  baseURL: INVESTMENT_BASE_URL,
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${config.INVESTMENT_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// Function to get investment suggestions
const getInvestmentSuggestions = async (userId, riskProfile) => {
  try {
    const response = await investmentApiClient.post('/suggestions', { userId, riskProfile });
    return response.data;
  } catch (error) {
    console.error(`Failed to get investment suggestions for user ${userId}: ${error}`);
    return null;
  }
};

// Function to get user's investment history
const getInvestmentHistory = async (userId) => {
  try {
    const response = await investmentApiClient.get(`/users/${userId}/investments`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get investment history for user ${userId}: ${error}`);
    return null;
  }
};

// Export the functions
module.exports = {
  getInvestmentSuggestions,
  getInvestmentHistory
};
```

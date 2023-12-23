```javascript
// Import required packages
const axios = require('axios');
const config = require('./config');

// Define the base URL for the bank API
const BASE_URL = 'https://api.bank.com';

// Create an instance of axios with predefined settings
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${config.BANK_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// Function to get user transactions
const getUserTransactions = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}/transactions`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get transactions for user ${userId}: ${error}`);
    return null;
  }
};

// Function to categorize transactions
const categorizeTransactions = async (transactions) => {
  try {
    const response = await apiClient.post('/transactions/categorize', { transactions });
    return response.data;
  } catch (error) {
    console.error(`Failed to categorize transactions: ${error}`);
    return null;
  }
};

// Export the functions
module.exports = {
  getUserTransactions,
  categorizeTransactions
};
```

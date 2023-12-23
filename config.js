```javascript
// Import dotenv package
const dotenv = require('dotenv');

// Configure dotenv to load environment variables
dotenv.config();

// Export the configuration
module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  BANK_API_KEY: process.env.BANK_API_KEY,
  ML_API_KEY: process.env.ML_API_KEY,
  ALERT_API_KEY: process.env.ALERT_API_KEY,
  INVESTMENT_API_KEY: process.env.INVESTMENT_API_KEY,
};
```


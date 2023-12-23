```javascript
// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import custom modules
const bankAPI = require('./bankAPI');
const mlModel = require('./mlModel');
const expenseTracker = require('./expenseTracker');
const budgetPlanner = require('./budgetPlanner');
const investmentAdvisor = require('./investmentAdvisor');
const alertSystem = require('./alertSystem');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Initialize Express app
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/bank', bankAPI);
app.use('/api/ml', mlModel);
app.use('/api/expense', expenseTracker);
app.use('/api/budget', budgetPlanner);
app.use('/api/investment', investmentAdvisor);
app.use('/api/alert', alertSystem);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
```

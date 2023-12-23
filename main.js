```javascript
// Import required modules
const express = require('express');
const path = require('path');
const config = require('./config');

// Import custom modules
const app = require('./app');

// Initialize Express app
const server = express();

// Middleware for parsing JSON and urlencoded form data
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Serve static files from the React app
server.use(express.static(path.join(__dirname, 'client/build')));

// Use the app routes
server.use('/api', app);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Start server
const port = config.PORT;
server.listen(port, () => console.log(`Server started on port ${port}`));
```

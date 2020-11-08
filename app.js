const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.send('Express response');
});

app.listen(4000);
console.log('App server running on port 4000');

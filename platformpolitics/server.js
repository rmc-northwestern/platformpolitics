const express = require('express');

const app = express();

app.get('/api/elections', (req, res) => {
  const elections = ['Illinois District 6', 'Wisconson Governor', 'Missouri Senate', 'Texas Senate', 'Minnesota District 8', 'Illinois District 9', 'Pennsylvania Governor', 'Wisconsin Senate', 'California District 42'];

  res.json(elections);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

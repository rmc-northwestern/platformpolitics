const express = require('express');

const app = express();


var spawn = require('child_process').spawn

const pythonscript = __dirname + '/test.py'
console.log(pythonscript, 'says the following:  ')

app.get('/api/elections', (req, res) => {
  const elections = ['Illinois District 6', 'Wisconson Governor', 'Missouri Senate', 'Texas Senate', 'Minnesota District 8', 'Illinois District 9', 'Pennsylvania Governor', 'Wisconsin Senate', 'California District 42'];

  res.json(elections);
});

app.get('/api/candidate/:handle', (req,res)=>{
  var child = spawn('python',[pythonscript])
  child.stdout.on('data', function(data) {
    res.json(data);
  })
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

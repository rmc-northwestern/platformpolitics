const express = require('express');
const { exec } = require('child_process');

const app = express();

app.use(express.static('publictest'))


app.get('/api/elections', (req, res) => {
  const elections = ['Illinois District 6', 'Wisconson Governor', 'Missouri Senate', 'Texas Senate', 'Minnesota District 8', 'Illinois District 9', 'Pennsylvania Governor', 'Wisconsin Senate', 'California District 42'];

  res.json(elections);
});

app.get('/api/candidate/:handle', (req,res)=>{
  var userHandle = req.params.handle
  console.log('Received User Handle: ',userHandle)
  var child = spawn('python',[pythonscript, userHandle])
  child.stdout.on('data', function(data) {
    res.send(data.toString());
  })
})

app.get('/api/predict/:race/:handle', (req,res)=>{
  console.log(req.params)
  var handle = req.params.handle
  var race = req.params.race

  exec('python3 predict.py ' + race + ' ' + handle, {cwd:"python"}, (error, stdout, stderr) => {
  // exec('python test.py', {cwd:"python"}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.send(stdout)
  });
})

app.get('/api/create/:race/:handle1/:handle2', (req,res)=>{
  console.log(req.params)
  var handle1 = req.params.handle1
  var handle2 = req.params.handle2
  var race = req.params.race

  exec('python3 create.py ' + race + ' ' + handle1 + ' ' + handle2, {cwd:"python"}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.send(stdout)
  });
  console.log("async continue, model building in progress (hopefully)")
})

app.get('/api/get_races', (req,res)=>{

  exec('python3 get_races.py', {cwd:"python"}, (error, stdout, stderr) => {
  // exec('python test.py', {cwd:"python"}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.send(stdout)
  });
})

app.get('/api/get_pic_name/:handle', (req,res)=>{
  console.log(req.params)
  var handle = req.params.handle

  exec('python3 getProfileAndName.py ' + handle, {cwd:"python"}, (error, stdout, stderr) => {
  // exec('python test.py', {cwd:"python"}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.send(stdout)
  });
})

app.get('/api/test',  (req,res)=>{
    res.send('lorem')
  }
)


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

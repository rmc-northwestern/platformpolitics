const express = require('express');
const { exec } = require('child_process');

const app = express();

var py = require('./pyVer.js');

app.use(express.static('client/build'))


// app.get('/api/elections', (req, res) => {
//   const elections = ['Illinois District 6', 'Wisconson Governor', 'Missouri Senate', 'Texas Senate', 'Minnesota District 8', 'Illinois District 9', 'Pennsylvania Governor', 'Wisconsin Senate', 'California District 42'];
//
//   res.json(elections);
// });
//
// app.get('/api/candidate/:handle', (req,res)=>{
//   var userHandle = req.params.handle
//   console.log('Received User Handle: ',userHandle)
//   var child = spawn('python',[pythonscript, userHandle])
//   child.stdout.on('data', function(data) {
//     res.send(data.toString());
//   })
// })

app.get('/api/predict/:race/:handle', (req,res)=>{
  console.log('/api/predict/:race/:handle')
  console.log(req.params)

  var handle = req.params.handle
  var race = req.params.race

  exec(py.python + ' predict.py ' + race + ' ' + handle, {cwd:"python"}, (error, stdout, stderr) => {
  // exec(py.python + ' test.py', {cwd:"python"}, (error, stdout, stderr) => {
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
  console.log('/api/create/:race/:handle1/:handle2')
  console.log(req.params)

  var handle1 = req.params.handle1
  var handle2 = req.params.handle2
  var race = req.params.race

  exec(py.python + ' create.py ' + race + ' ' + handle1 + ' ' + handle2, {cwd:"python"}, (error, stdout, stderr) => {
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
  console.log('/api/get_races')
  console.log(req.params)

  exec(py.python + ' get_races.py', {cwd:"python"}, (error, stdout, stderr) => {
  // exec(py.python + ' test.py', {cwd:"python"}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.send(stdout)
  });
})

app.get('/api/get_model_details/:name', (req,res)=>{
  console.log('/api/get_model_details/:name')
  console.log(req.params)
  var name = req.params.name

  exec(py.python + ' get_model_details.py ' + name, {cwd:"python"}, (error, stdout, stderr) => {
  // exec(py.python + ' test.py', {cwd:"python"}, (error, stdout, stderr) => {
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

  exec(py.python + ' getProfileandName.py ' + handle, {cwd:"python"}, (error, stdout, stderr) => {
  // exec(py.python + ' test.py', {cwd:"python"}, (error, stdout, stderr) => {
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

app.listen(py.port, () => `Server running on port ${py.port}`);

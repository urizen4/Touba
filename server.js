const express = require('express');
const path = require('path');
const { dirname } = require('path/posix');

const app= express();

app.use(express.static(_dirname + '/dist/touba'));

app.get('/*',function(req,res) {
  res.sendFile(path.join(_dirname+'/dist/touba/index.html'));
});

app.listen(process.env.PORT);

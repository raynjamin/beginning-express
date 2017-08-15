const express = require('express');
const path = require('path');
const app = express();
// requires and environment setup ...

const mustacheExpress = require('mustache-express');

// use the mustache-express templating engine
app.engine('mustache', mustacheExpress());

// setting the view location
app.set('views', './views');

// set the view engine to mustache
// (we defined the mustache view engine
// above)
app.set('view engine', 'mustache');



// configure express to make the
// "public" directory deliver static
// resources (e.g. images, css, js)
// app.use(express.static('public'));

// assumes that the folder you run node in
// is the same folder that contains the "public"
// directory
app.use('/static', express.static('public'));

// sets up static assets to the absolute path of the files
// (as opposed to the relative path above)
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  // res.send('Hello World!');

  //serve 'index.html'
  // NODE GIVES US __dirname. it is a string
  // that represents the CURRENT WORK
  // res.sendFile(path.join(__dirname, 'index.html'));

  res.render('index', { userName: 'Ben' })
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
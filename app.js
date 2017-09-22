'use strict';

const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');

app.use(volleyball);

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.send('jambo!');
});

models.User.sync({})
  .then(function(){
    return models.Page.sync({});
  })
  .then(function(){
    app.listen(3000, function(req, res){
      console.log('server is listening');
    });
  })
  .catch(console.error);

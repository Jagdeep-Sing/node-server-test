const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Homepage',
    welcomeMsg: 'Welcome to the Awesomeness of your DREAMS'
  });
});

app.get('/products', (req,res) =>{
  res.render('products.hbs', {
    pageTitle: 'Products page',
    welcomeMsg: 'See these awesome products and get mad!!'
  });
});
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page'
  });
});

app.listen(3000, () => {
  console.log('App Listening on port 3000');
});

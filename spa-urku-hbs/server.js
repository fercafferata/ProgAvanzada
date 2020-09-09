const express = require('express');
const app = express();

//Creamos una variable de entorno para que pueda escucharlo, que es una variable de entorno global
const port= process.env.PORT || 8000

const hbs = require('hbs');

app.use(express.static(__dirname + '/views'));


//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales')

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('Home')
})

app.get('/About', (req, res) => {
    res.render('About')
})

app.get('/Portfolio', (req, res) => {
    res.render('Portfolio')
})

app.get('/Blog', (req, res) => {
    res.render('Blog')
})

app.get('/Contact', (req, res) => {
    res.render('Contact')
})

app.listen(port)
console.log(`Server escuchando en http://localhost:${port}/`);
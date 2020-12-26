const express = require('express');
const app = express();
 
const hbs = require('hbs');

// helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//middleware
app.use(express.static(__dirname + '/docs'));

// Express HBS engine
hbs.registerPartials( __dirname+'/views/partials');
app.set('view engine', 'hbs');





app.get('/', (req, res)=> {

  res.render('home',{
    nombre: 'Guillermo',
});
});


app.get('/about', (req, res)=> {

    res.render('about',{
});
});
  


app.listen(port, ()=> {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
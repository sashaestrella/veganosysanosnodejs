var express = require('express');
var router = express.Router();

var recetasVegan = [
    {titulo:"Bizcochuelo de naranja", imagen:"images/bizcoDeNaranja.png"},
    {titulo:"Brownies de Chocolino", imagen:"images/brownies.jpeg"},
    {titulo:"Queso de garbanzos", imagen:"images/quesoDeGarbanzos.jpg"},
    {titulo:"Torta de manzana", imagen:"images/tortaDeManzanaPosta.jpeg"},
    {titulo: "Pizza", imagen: "images/pizza.jpg"},
    {titulo: "Bombas de papa", imagen: "images/bombasDePapa.jpg"}
];

/* GET users listing. */
router.get('/', function(peticion, respuesta){
    respuesta.render('recetas.pug',{
        titulo : "Recetas",
        recetas: recetasVegan
    });
});

module.exports = router;

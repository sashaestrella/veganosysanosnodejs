var express = require('express');
var router = express.Router();

var recetasVegan = [
    {titulo:"Bizcochuelo de naranja", imagen:"images/bizcoDeNaranja.png"},
    {titulo:"Brownies de Chocolino", imagen:"images/brownies.jpeg"},
    {titulo:"Queso de garbanzos", imagen:"images/quesoDeGarbanzos.jpg"},
    {titulo:"Torta de manzana", imagen:"images/tortaDeManzanaPosta.jpeg"},
    {titulo:"Pizza", imagen: "images/pizza.jpg"},
    {titulo:"Bombas de papa", imagen: "images/bombasDePapa.jpg"},
    {titulo: "Bizcochuelo marmolado", imagen: "images/bizcoMarmolado.jpg"},
    {titulo: "Dulce de leche de almendras", imagen: "images/dulce de almendras.jpg"},
    {titulo: "Ñoquis de papa y zapallo", imagen: "images/ñoquis.jpg"},
    {titulo: "Fideos con salsa de espinaca", imagen: "images/fideosConEspinaca.jpg"}
];

/* GET users listing. */
router.get('/', function(peticion, respuesta){
    respuesta.render('recetas.pug',{
        titulo : "Recetas",
        recetas: recetasVegan
    });
});

module.exports = router;

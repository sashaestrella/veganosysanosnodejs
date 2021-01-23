var express = require('express');
var router = express.Router();

router.get('/', function(peticion, respuesta){
    respuesta.render('comoComenzar.pug');
});

module.exports = router;
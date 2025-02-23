"use strict";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require("fs");
var body_parser = require('body-parser');

var indexRouter = require('./routes/index');
var recetasRouter  = require('./routes/recetas');
var veganismoRouter  = require('./routes/veganismo');
var comoComenzarRouter  = require('./routes/comoComenzar');

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(body_parser.urlencoded({ extended:true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'vendor')));
app.use(express.static(path.join(__dirname, 'files')));

app.use('/', indexRouter);
app.use('/recetas', recetasRouter);
app.use('/veganismo', veganismoRouter);
app.use('/comoComenzar', comoComenzarRouter);

app.get('/chat', function(req, res, next) {
  res.render('chat.pug');
});

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */

app.get("/descarga/:nombre_receta", (req, res) => {
  if(req.params.nombre_receta == "Torta de naranja"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/tortaDeNaranjaVegana.txt`);
    const contenido = "Ingredientes🌱 \n1 zanahoria grande rallada \n1 taza de agua \n1/4 taza de aceite de girasol \nJugo de un limón \n1 taza de azúcar \n2 tazas de premezcla sin tacc o harina de trigo \n1 cucharadita de polvo para hornear \n1 cucharadita de bicarbonato de sodio \n\nProcedimiento 🌱 \nMezclar primero todos los líquidos junto con la zanahoria y el azúcar, e ir agregando de a poco la premezcla para que no se formen grumos. Le agregamos el bicarbonato y seguimos mezclando pero con movimientos envolventes para que no se baje el batido. Rociar con spray vegetal y enharinar un molde para torta para luego volcar la mezcla. \nLlevar a horno bajo por aproximadamente 45 minutos y a disfrutar 😍"
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/tortaDeNaranjaVegana.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
      }
    )
  }else if(req.params.nombre_receta == "Brownies"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/browniesVeganos.txt`);
    const contenido = "Ingredientes🌱 \n370gr premezcla sin tacc o harina de trigo \n150ml aceite de coco \n4 huevos de lino (1 huevo de lino equivale a 1 cucharada de lino y 3 de agua) \n250gr azúcar \nEsencia de vainilla\n1 cucharadita de bicarbonato de sodio \n2 tazas de chocolino \n\nProcedimiento 🌱 \nA los huevos de lino le incorporamos el aceite y luego todos los secos. Batir bien con batidora eléctrica (yo ademas le agregué algunas nueces!). Rociar con spray vegetal y enharinar una fuente para luego colocar la mezcla, y llevar a horno 180° por aproximadamente 40/45 minutos 😍"
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/browniesVeganos.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
      }
    )
  }else if(req.params.nombre_receta == "Queso de garbanzos"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/quesoDeGarbanzos.txt`);
    const contenido = "Dejar la noche anterior remojar 1 taza de garbanzos.\n1🌺 Al día siguiente sacar los garbanzos del agua, limpiarlos y cocinarlos. Tarda alrededor de 1h y 15 minutos.\n2🌺 Luego ponerlos en un bowl y agregarle:\n\n1 cda de levadura nutricional1 diente de ajo\n Un poco de limón (opcional)\n 1 cdita de Sal\n Pizca de orégano (opcional pero súper recomendado, el gusto que le da es más rico!)\n Pizca de pimienta\n 1 cda de Aceite\n 1 taza de agua\n\n3🌺Lo batimos con un minipimer, hasta que estén todos los ingredientes juntos\n4🌺 Ponerlo de vuelta en una cacerola y calentarlo a fuego lento. Batirlo hasta que quede espeso. (Entre 10' o 15')\n5🌺 Aceitar un bowl y luego meter la mezcla homogénea adentro.\n6🌺 Dejarlo en la heladera durante mínimo 1h\n⚠️⚠️IMPORTANTE⚠️⚠️\nSi tenés LICUADORA, directamente colocas los garbanzos de la noche anterior junto a todos los ingredientes y los licuas. Luego seguis los pasos 4, 5 y 6!!\n¡¡A DISFRUTAR!!"
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/quesoDeGarbanzos.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
      }
    )
  } else if(req.params.nombre_receta == "Torta de manzana"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/tortaDeManzanaVegana.txt`);
    const contenido = "Ingredientes🌱 \n2 tazas de premezcla sin tacc\n 1/2 taza de trigo sarraceno\n 1 taza de agua\n 1/4 taza de aceite\n 1 taza de azúcar\n 1 manzana grande\n Ralladura y jugo de un limón\n 1 cucharadita de polvo para hornear\n 1 cucharadita de bicarbonato de sodio\n\nCaramelo \n 100gr de azúcar\nY para la cubierta de manzanas use 4 manzanas chicas\n\nProcedimiento 🌱\nRealizar el caramelo en el molde dónde se va a cocinar la torta. Pelar y cortar las manzanas en rodajas colocándolas con cuidado solie el caramelo, y reservar.\nPara realizar el budín primero mezclamos todos los líquidos junto con el azúcar y la manzana previamente hecha puré. De a poco vamos agregando las harinas para que no se hagan grumos.\nUna vez integrado todo se le agrega el polvo de hornear y el bicarbonato, mezclando con movimientos envolventes. Colocar está mezcla por encima del caramelo con las manzanas y llevar a horno bajo durante aprox 40 minutos (o hasta pinchar con un cuchillo y este salga limpio) 🥰🥰🥰"
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/tortaDeManzanaVegana.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
      }
    )
  } else if(req.params.nombre_receta == "Pizza"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/pizzaVegana.txt`);
    const contenido = "Ingredientes🌱 \n400gr premezcla sin tacc(o harina de trigo)\n 150gr trigo sarraceno\n 1 cucharadita de sal\n 1 cucharadita de goma xántica(se omite si usas harina de trigo)\n 1 cucharadita de azúcar\n 580ml agua tibia\n 50gr levadura fresca\n\nProcedimiento 🤤🤤🤤\nMezclar la levadura,junto con el agua y el azúcar, tapar y reservar hasta que espume.\nA la espuma le incorporamos todos los demás ingredientes batiendo con batidora eléctrica hasta que esté todo bien integrado. Aceitar 2 pizzeras y colocar mitad del contenido en cada una de ellas . Dejar leudar hasta que duplique su volumen y luego llevar a horno fuerte por aprox 15 minutos o hasta que esté cocida.\nRecién ahí le agregamos el puré de tomate por encima y el queso vegano de preferencia.\n\n**Con el queso de garbanzos o el de papa queda más que genial 😍😍😍"
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/pizzaVegana.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
      }
    )
  }else if(req.params.nombre_receta == "Bombas de papa"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/bombasDePapaVeganas.txt`);
    const contenido = "Ingredientes🌱 \n1kg de papas cocinadas (para hacer un puré)\n 1 diente de ajo\n Sal y perejil a gusto\n 100gr de harina de garbanzos\n Aprox 150ml de agua\n Pan rallado c/n\n Aceite c/n\n **En el medio le puse el queso de papa, QUEDARON GENIALLLLL\n\nProcedimiento😍\nCon un pisa papas realizar el puré,agregarle la sal,perejil y el diente de ajo picado. Por otro lado mezclar el harina de garbanzos con el agua,hasta integrar bien (no debe queda ni muy líquido ni muy espeso, esto es para reemplazar el huevo).\nArmar las bolitas con la mano, pasarlas por la mezcla de harina y luego por pan rallado. Colocarlas en una fuente aceitada y cocinarlas en horno hasta que estén doradas de ambos lados❤🔥"
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/bombasDePapaVeganas.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
      })
  }else if(req.params.nombre_receta == "Bizcochuelo marmolado"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/bizcochueloMarmoladoVegano.txt`);
    const contenido = "Ingredientes🌱 \n2 tazas de premezcla\n1 taza de azúcar\n1 taza de agua\n1/4 taza de aceite de girasol\nJugo de un limón\nEsencia de vainilla\n2 cucharaditas de polvo para hornear\n1 cucharadita de bicarbonato de sodio\n\nProcedimiento 🌱\nMezclar todos los líquidos e incorporarle de a poco los secos. Dividir en dos partes la mezcla. A una de ellas le agregamos 3/4 taza de Chocolino, y mezclamos bien. Volcar ambas mezclas en un molde de torta previamente rociado con spray vegetal y enharinado. A horno bajo por aprox 45 minutos a una hora😍😍❤"
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/bizcochueloMarmoladoVegano.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
    })
  }else if(req.params.nombre_receta == "Dulce de leche de almendras"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/dulceDeLecheDeAlmendras.txt`);
    const contenido = "Ingredientes🌱 \n60ml de agua\n150gr de azucar\n160ml de leche de almendras o de coco\n3 cucharadas de almidon de maiz\n1 cda esencia de vainilla\n1 cdita aceite de coco\nPizca de sal\n\nProcedimiento🤩\nMezclar en un jarrito de leche o recipiente (que se pueda llevar al fuego) el azúcar junto con el agua. Ir revolviendo de a ratitos hasta que esté hecho el caramelo. Una vez hecho esto retirar del fuego y agregarle con MUCHO CUIDADO una parte de la leche(porque empieza como a saltar por las distintas temperaturas). A la otra parte de la leche mezclarla bien con el almidón de maíz, para luego agregarla también a la mezcla anterior y llevar al fuego nuevamente. No dejar de revolver hasta que quede como una textura de 'crema pastelera' o como una crema básicamente.\nEn caliente agregarle la esencia de vainilla, el aceite de coco y la pizca de sal. Mezclar bien y colocar en un frasco (hermético si es posible). Llevar a la heladera hasta enfriar.\nY a disfrutar!!!😁😁😁"
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/dulceDeLecheDeAlmendras.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
    })
  }else if(req.params.nombre_receta == "Ñoquis de papa y zapallo"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/ñoquisVeganos.txt`);
    const contenido = "Ingredientes🌱 \n1kg papas\n400gr zapallo \n400gr premezcla (aprox)\nSal, pimienta, nuez moscada a gusto\n\nProcedimiento:\nCocinar las papas y el zapallo hasta un poquito antes de llegar a punto como para hacer un puré.  Armar el puré e integrarle la harina. Armar la masa, espolvorear harina en la mesa, hacer los rollitos y cortarlos de igual tamaño.\nPoner a hervir el agua, y en cuanto empiezan a subir es porque ya están.\nPodes acompañarlo con salsa de espinacas, pesto, tuco(salsa de tomate), salsa blanca vegana, etc--- y por supuesto el queso Rawmesan que le da un toque riquisimo y muy particular!."
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/ñoquisVeganos.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
    })
  }else if(req.params.nombre_receta == "Fideos con salsa de espinaca"){
    const streamEscritura = fs.createWriteStream(`${__dirname}/files/fideosConSalsaDeEspinacaVeganos.txt`);
    const contenido = "Ingredientes🌱 \nUna planta de espinaca (lavar bien las hojas)\nSal, pimienta y nuez moscada a gusto\n150ml aceite de girasol\n1 cucharada de levadura nutricional sabor queso\n1 cebolla (previamente picada y cocida)\n1 diente de ajo\n\nProcesar todo y listo!! Es riquísimo!!! "
    streamEscritura.write(`${req.params.nombre_receta} - receta por: @Veganos y Sanos\n\n${contenido}`,() => {
        res.download(`${__dirname}/files/fideosConSalsaDeEspinacaVeganos.txt`, error => {
          if(error){
            console.log("ERROR");
            res.status(404).render("error");
          }else{
            console.log("Descarga OK");
          }
        });
    })
  }
});

module.exports = app;
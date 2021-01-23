var express = require('express');
var router = express.Router();
var nodeMailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.pug');
});

router.post('/index/send', function(req, res) {
  var transporter = nodeMailer.createTransport({
    service : 'Gmail',
    auth : 
    {
      user:'sashi.estrella@gmail.com',
      pass:'mariposa1997'
    }
  });

  var mail ={ 
    from:req.body.email,  //remitente
    to:"sashi.estrella@gmail.com",  //destinatario
    subject:"Nuevo mensaje de Veganos y Sanos",  //asunto del correo
    html: '<p><ul><li>Nombre: '+ req.body.name+'</li><li> Email: '+req.body.email+'</li><li>Mensaje: '+req.body.message+'</li></ul>',
  };
  
  transporter.sendMail(mail, function (err, info){
    if(err){
      console.log(err);
      //res.redirect('/error');
    }else{
      console.log('Mensaje enviado');
      res.send('Su mensaje fue enviado exitosamente, gracias por visitar nuestra página.');
    }
  });
});

module.exports = router;
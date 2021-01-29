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
    secure: true,
    auth : {
      user:'sashi.estrella@gmail.com',
      pass:'mariposa1997'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mail ={ 
    from: req.body.email,  //remitente
    to:"sashi.estrella@gmail.com",  //destinatario
    subject:req.body.asunto,  //asunto del correo
    html: '<p><li><u>Nombre</u>: '+ req.body.name+'</li><li><u>Email</u>: '+req.body.email+ '</li><li><u>Opción elegida</u>: '+req.body.opcion+ '</li><li><u>Mensaje</u>: '+req.body.message+'</li></ul>',
  };
  
  transporter.sendMail(mail, function (err, info){
    if(err){
      console.log(err);
      //res.redirect('/error');
      return res.end();
    }else{
      console.log('Mensaje enviado');
      res.send("Su mensaje ha sido enviado✔️ Gracias por visitar nuestra página.");
      return res.end();
    }
  });
});

module.exports = router;
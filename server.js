//reste a inserer les sessions
var express  = require('express');
var request  = require('request');
var mongoose= require('mongoose');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
var options = { server: { socketOptions: {connectTimeoutMS: 30000 } }};
mongoose.connect('mongodb://savetier:Marcelino92@ds123193.mlab.com:23193/salledutemps', options , function(err) {
});


var userSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String,
    confirmPassword: String
});
var userModel = mongoose.model('User', userSchema);


//numero de telephone
var rdvSchema = mongoose.Schema({
  date: String,
  heure:String,
  activite:String
});
var rdvModel = mongoose.model('Rdv', rdvSchema);





app.get('/', function(req, res){
  res.render('index');
});



app.get('/login', function(req, res){
  if(req.query.email != '' && req.query.password != ''){
    userModel.findOne({email:req.query.email, password:req.query.password}, function(err, users){
      if(users != null){
       res.send('isLog');
     } else{
       res.send('error');
     }
    });
  } else {
      res.send('signIn');
  }
});



app.get('/rdv', function(req, res){
  if(req.query.date != undefined && req.query.heure != undefined && req.query.activite != undefined){
    var rdv = new rdvModel ({
      date:req.query.date,
      heure:req.query.heure,
      activite:req.query.activite
    });
    rdv.save(function (error, rdv){
	});
  }
  	rdvModel.find(function (err, rdvList) {
	    res.send(JSON.stringify(rdvList));
	});
});





app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
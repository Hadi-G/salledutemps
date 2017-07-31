//la base de donnee n'est pas fonctionnelle
//reste a inserer les sessions
var express  = require('express');
var request  = require('request');
var mongoose= require('mongoose');
mongoose.connect('mongodb://hg75:zipang@ds127153.mlab.com:27153/salle_du_temps' , function(err) {
});
var userSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String,
    confirmPassword: String
});
var UserModel = mongoose.model('User', userSchema);
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.render('index');
});

app.get('/register', function(req, res){
if(req.query.password = req.query.confirmPassword){
var user = new UserModel ({
  nom:req.query.nom,
  prenom:req.query.prenom,
  email:req.query.email,
  password:req.query.password,
  confirmPassword:req.query.confirmPassword
          });
user.save(function (error, data){
  console.log(data);
      });
    }
});
app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
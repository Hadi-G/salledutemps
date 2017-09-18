var React = require('react');
var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link
var Title = require('./Title.js');
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
    this.state = {nom:'', prenom:'', email:'', password:'', confirmPassword:''}
  }
nameChange(event){
  this.setState({nom: event.target.value});
}
firstNameChange(event){
  this.setState({prenom :event.target.value});
}
emailChange(event){
  this.setState({email :event.target.value});
}
passwordChange(event){
  this.setState({password :event.target.value});
}
confirmPasswordChange(event){
  this.setState({confirmPassword :event.target.value});
}
handleSubmit(event){
  fetch(serverPath+'/register?nom='+this.state.nom+'&prenom='+this.state.prenom+'&email='+this.state.email+'&password='+this.state.password+'&confirmPassword='+this.state.confirmPassword, {
method: 'get'
}).then(function(response) {
}).catch(function(err) {
});
event.preventDefault();
this.setState({nom:'', prenom:'', email:'', password:'', confirmPassword:''});
}
  render() {
    return (
<div>
    <Title /><br /><br /><br />
<form onSubmit={this.handleSubmit}>
<label>
Nom:
<input type="text" placeholder="nom" name="nom" value={this.state.nom} onChange={this.nameChange} />
</label>
<label>
Prenom:
<input type="text" placeholder="prenom" name="prenom" value={this.state.prenom} onChange={this.firstNameChange} />
</label>
<label>
Email:
<input type="text" placeholder="adresse email" name="email" value={this.state.email} onChange={this.emailChange}/>
</label>
<label>
Mot de passe:
<input type="password" placeholder="mot de passe" name="password" value={this.state.password} onChange={this.passwordChange}/>
</label>
<label>
Confirmation mot de passe:
<input type="password" placeholder="confirmer votre mot de passe" name="confirmPassword" value={this.state.confirmPassword} onChange={this.confirmPasswordChange}/>
</label>
<input type="submit" value="enregistrer" />
</form>
</div>
    );
  }
}
module.exports = RegisterForm;

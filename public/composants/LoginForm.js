var React = require('react');
var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link
var Title = require('./Title.js');
class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state ={email : '', password : '' };
  }
  handleChange1(event){
    this.setState({email : event.target.value});
  }
  handleChange2(event){
    this.setState({password : event.target.value});
  }
  handleSubmit(event){
    //Créer une route associer loginForm
    fetch('http://localhost:8080/ajax?email='+this.state.email+'&password='+this.state.password, {
    method: 'get'
}).then(function(response) {
}).catch(function(err) {
});
event.preventDefault();
this.setState({email:'', password:''});
  }
  render() {
    return (
<div>
    <Title /><br /><br /><br />
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" placeholder="adresse email" name="email" value={this.state.email} onChange={this.handleChange1} />
        </label>
        <label>
          Mot de passe:
          <input type="password" placeholder="mot de passe" name="password" value={this.state.password} onChange={this.handleChange2} />
        </label>
          <input type="submit" value="Se connecter" />
      </form>
<br />
      <Link to="/Register">
        <span>Premiere connexion</span>
      </Link>
</div>
    );
  }
}
module.exports = LoginForm;
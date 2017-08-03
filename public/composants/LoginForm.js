var React = require('react');
var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link
var Title = require('./Title.js');
var Redirect = require('react-router').Redirect

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state ={email : '', password : '', loginConfirm: this.props.loginConfirm };
  }
  handleChange1(event){
    this.setState({email : event.target.value});
  }
  handleChange2(event){
    this.setState({password : event.target.value});
  }
  handleSubmit(event){
  var appObj = this;
      fetch(serverPath+'/login?email='+this.state.email+'&password='+this.state.password, {
            method: 'get'
          }).then(function(response) {
            return response.json();
          }).then(function(obj) {

            if(obj.isLog == true){
              appObj.setState({loginConfirm:true});
              appObj.props.onIncreaseSubmit(obj);

            } else {
              if(obj.error == 'invalide'){
                alert('email ou mot de passe invalide');
              } else {
                if(obj.error == 'vide'){
                  alert('saisir email et mot de passe' );
                }
              }
            }
          });

          event.preventDefault();
          this.setState({email:'', password:''});

        }

  render() {
    var redirection = '';
    if(this.state.loginConfirm == true){
      var redirection = <Redirect to='/profile' />;
    }

    return (
        <div>
            {redirection}
            <Title/>
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
        </div>
    );
  }
}
module.exports = LoginForm;

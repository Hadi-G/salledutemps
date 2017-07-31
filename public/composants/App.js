var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link

var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;

var RegisterForm = require("./RegisterForm.js");
var LoginForm = require("./LoginForm.js");
var Title = require('./Title.js');
var Objectif = require('./Objectif.js');
var Succes = require('./Succes.js');
var Profile = require('./Profile.js');
var RdvForm = require('./RdvForm.js');


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title/>  
        <Objectif/>

        <nav className="bar bar-tab">
          <Link className="tab-item active" to="/">
            <span className="icon icon-home"></span>
            <span className="tab-label">Acceuil</span>
          </Link>
          <Link className="tab-item" to="/profile">
            <span className="icon icon-person"></span>
            <span className="tab-label">Profil</span>
          </Link>
        </nav>

      </div>
    );
  }
}




ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/succes' component={Succes}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/rdv' component={RdvForm}/>
    </div>
  </Router>
  ,
  document.getElementById('container')
);

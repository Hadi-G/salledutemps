var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;
var Switch = require('react-router-dom').Switch;

var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;

var RegisterForm = require("./RegisterForm.js");
var LoginFormRedux = require("./LoginFormRedux.js");
var Title = require('./Title.js');
var Objectif = require('./Objectif.js');
var Succes = require('./Succes.js');
var Profile = require('./Profile.js');
var RdvFormRedux = require('./RdvFormRedux.js');



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
          <Link className="tab-item" to="/login">
            <span className="icon icon-person"></span>
            <span className="tab-label">Profil</span>
          </Link>
        </nav>

      </div>
    );
  }
}

function counterReducer(state, action) {
  if(action.type == 'loginConfirm') {
      return { login: action.login, nom: action.nom, prenom:action.prenom, telephone:action.telephone}
  } else {
      return state;
  }
}

const store = createStore(counterReducer, {login:false, nom: null, prenom: null, telephone: null});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/succes' component={Succes} />
        <Route path='/login' component={LoginFormRedux} />
        <Route path='/profile' component={Profile} />
        <Route path='/rdv' component={RdvFormRedux} />
        <Route component={App} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('container')
);

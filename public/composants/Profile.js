var React = require('react');

var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link

var Title = require('./Title.js');
var NavRedux = require('./NavRedux.js');

class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title />
        <div>
          <div className="img-profil">
            <Link to="/rdv"> <button id="rdv">rdv</button></Link>
          </div>
          </div>
          <div className="description">
            <h8>Salle du Temps</h8>
            <p>Chief Executive Officer  : Pierre Matthieu Louis<br/>
            Chief Technologie Officer : Willy Savetier</p>
          </div>
            <NavRedux />

            <nav className="bar bar-tab">
              <Link className="tab-item" to="/">
                <span className="icon icon-home"></span>
                <span className="tab-label">Acceuil</span>
              </Link>
              <Link className="tab-item active" to="/profile">
                <span className="icon icon-person"></span>
                <span className="tab-label">Profil</span>
              </Link>
            </nav>

      </div>

    );
  }
}

module.exports = Profile;

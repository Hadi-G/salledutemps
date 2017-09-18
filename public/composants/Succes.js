var React = require('react');

var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link

class Succes extends React.Component {

  render() {

    return (
      <div>
        <header className="bar bar-nav">
          <Link className="icon icon-close pull-right" to="/"></Link>
          <h1 className="title" id="title2">Succes</h1>
        </header>
        <div className="content">
          <div className="detail">
            <p className="content-padded">Selon une étude américaine de l'université George Washington publié dans Diabetes Care, montre que si, après un repas, on marche de manière plutôt soutenue pendant un quart d'heure, notre taux de sucre dans le sang va se mettre à baisser, et que les effets de cette baisse durent pas moins de 24 heures ! Ce qui permet une meilleure sensibilité à l'insuline donc aide vos muscle à consommer vos sucres dans le sang et inéluctablement un perdre plus facilement de la matière grasse.</p>
          </div>
        </div>
      </div>

    );
  }
}


module.exports = Succes;
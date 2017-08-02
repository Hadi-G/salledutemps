var connect   = require('react-redux').connect;
var Nav = require("./Nav.js");



function mapStateToProps(state) {
  return { nom: state.nom, prenom: state.prenom}
}


var NavRedux = connect(
    mapStateToProps, 
    null
)(Nav);


module.exports = NavRedux;
var connect   = require('react-redux').connect;
var RdvForm = require("./RdvForm.js");



function mapStateToProps(state) {
  return { nom: state.nom, prenom: state.prenom }
}


var RdvFormRedux = connect(
    mapStateToProps, 
    null
)(RdvForm);


module.exports = RdvFormRedux;
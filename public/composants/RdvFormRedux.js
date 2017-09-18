var connect   = require('react-redux').connect;
var RdvForm = require("./RdvForm.js");



function mapStateToProps(state) {

  return { nom: state.nom, prenom: state.prenom, telephone:state.telephone }

}


var RdvFormRedux = connect(
    mapStateToProps,
    null
)(RdvForm);


module.exports = RdvFormRedux;

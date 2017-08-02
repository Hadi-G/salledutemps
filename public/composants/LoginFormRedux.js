var connect   = require('react-redux').connect;
var LoginForm = require("./LoginForm.js");



function mapStateToProps(state) {
  return { loginConfirm: state.login }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseSubmit: function(info) { 
        dispatch( {type: 'loginConfirm', login : info.isLog, nom: info.nom, prenom:info.prenom, telephone: info.telephone} ) 
    }
  }
}

var LoginFormRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(LoginForm);


module.exports = LoginFormRedux;
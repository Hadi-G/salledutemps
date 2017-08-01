var connect   = require('react-redux').connect;
var LoginForm = require("./LoginForm.js");



function mapStateToProps(state) {
  return { loginConfirm: state.login }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseSubmit: function(info) { 
        dispatch( {type: 'loginConfirm', login : info} ) 
    }
  }
}

var LoginFormRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(LoginForm);


module.exports = LoginFormRedux;
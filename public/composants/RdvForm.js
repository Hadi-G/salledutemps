import React from 'react';
import { Control, Form, actions } from 'react-redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link
var Redirect = require('react-router').Redirect

class RdvForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {startDate : moment(), rdv:'', activite:'', redirect:'', isOpen:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hourChange = this.hourChange.bind(this);
    this.activityChange = this.activityChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  handleChange(date){
    this.setState({startDate:date});
    this.toggleCalendar();
}

  toggleCalendat(e){
    e && e.preventDefault();
    this.setState({isOpen: !this.state.isOpen});
  }


  hourChange(event){
    this.setState({rdv:event.target.value});
  }

  activityChange(event){
    this.setState({activite:event.target.value});
  }

  handleSubmit(event){
    var formatDate = new Date(this.state.startDate.format('L'));
    fetch(serverPath+'/rdv?date='+formatDate+'&heure='+this.state.rdv+'&activite='+this.state.activite+'&prenom='+this.props.prenom+"&nom="+this.props.nom+"&telephone="+this.props.telephone, {
      method: 'get'
      }).then(function(response) {
      }).then(function(err) {
      });
    event.preventDefault();
    this.setState({startDate : moment(), rdv:'', activite:'', redirect:true});
}

  render() {

    var redirection = '';
    if(this.state.redirect == true){
      redirection = <Redirect to='/profile'/>;
    }

    return (
      <div>

        {redirection}

        <header className="bar bar-nav">
            <Link className="icon icon-close pull-right" to="/profile"></Link>
            <h1 className="title">Rendez-vous</h1>
        </header>
          <div className="form-color">
            <div className="form-rdv">
                  <form onSubmit={this.handleSubmit}>
                    <label className="datepicker">
                      <DatePicker selected={this.state.startDate} onChange={this.handleChange}
                      disabledKeyboardNavigation

                        withPortal
                      />
                    </label>
                    <label>
                      <select onChange={this.hourChange}>
                        <option value="Heure de rendez-vous"></option>
                        <option value="9H00">9H00</option><option value="9H30">9H30</option>
                        <option value="10H00">10H00</option><option value="10H30">10H30</option>
                        <option value="11H00">11H00</option><option value="11H30">11H30</option>
                        <option value="12H00">12H00</option><option value="12H30">12H30</option>
                        <option value="13H00">13H00</option><option value="13H30">13H30</option>
                        <option value="14H00">14H00</option><option value="14H30">14H30</option>
                        <option value="15H00">15H00</option><option value="15H30">15H30</option>
                        <option value="16H00">16H00</option><option value="16H30">16H30</option>
                        <option value="17H00">17H00</option><option value="17H30">17H30</option>
                        <option value="18H00">18H00</option><option value="18H30">18H30</option>
                        <option value="19H00">19H00</option><option value="19H30">19H30</option>
                        <option value="20H00">20H00</option><option value="20H30">20H30</option>
                        <option value="21H00">21H00</option><option value="21H30">21H30</option>
                      </select>
                    </label>
                    <label>
                      <select onChange={this.activityChange}>
                        <option value="Activite"></option>
                        <option value="X-Body1">X-Body 1</option>
                        <option value="X-Body2">X-Body 2</option>
                        <option value="Elliptique">Elliptique</option>
                        <option value="MonteMarche">Monte Marche</option>
                        <option value="Rameur">Rameur</option>
                      </select>
                    </label>
                  <button type='submit' className="form-btn">
                    Soumettre le rendez-vous
                  </button>
                </form>
            </div>
        </div>
      </div>
    );
  }
}



module.exports = RdvForm;

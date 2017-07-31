var React = require('react');

class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

  <header className="bar bar-nav">
    <h1 className="title" id="title">SalleduTemps</h1>
  </header>

    );
  }
}

module.exports = Title;

var React = require('react');
var Link = require('react-router-dom').Link


class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
		<nav className="nav">
			<div className="content-padded">
			  <ul className="ul">
			    <div>
			    	<Link id="li1" className="item-active" to="#contact">
			    		<span className="icon icon-list"></span>
			    	</Link>
			    	<Link id="li2" className="item" to="#about">
			    		<span className="icon icon-star"></span>
			    	</Link>
			    </div>
			  </ul>
			</div>
		</nav>
    );
  }
}

module.exports = Nav;

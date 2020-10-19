import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';


const App = (props) => {
	return (
		<div className="ui centered grid">
          <div className="four wide center aligned column">
			  <IndexLink to="/">Account</IndexLink>
          </div>
			{' | '}
			<div className="four wide center aligned column">
				<Link to="/withdrawals">Withdrawals</Link>
            </div>
			{' | '}
			<div className="four wide center aligned column">
				<Link to="/deposits">Deposits</Link>
            </div>
			<br/>
			{props.children}
		</div>
	);
};

App.propTypes = {
	children: PropTypes.element
};

export default App;
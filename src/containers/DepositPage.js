import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
	Divider
} from 'semantic-ui-react';

const DepositPage = (props) => {
	return (
		<div className="twelve wide column center aligned">

			<Divider/>

			<h2 className="ui icon header">
				<div className="content">
					Deposits
					<div className="sub header">Your recent deposits</div>
				</div>
			</h2>

			<Divider/>

			<table className="ui selectable inverted green table">
				<thead>
				<tr>
					<th>Amount ($)</th>
					<th className="right aligned">Timestamp</th>
				</tr>
				</thead>
				<tbody>
				{props.deposits.map(function(withdraw, index){
					return (
						<tr key={index}>
							<td>+{withdraw.amount}</td>
							<td className="right aligned">{withdraw.timestamp}</td>
						</tr>
					);
				})}
				</tbody>
			</table>

		</div>
	);
};

DepositPage.propTypes = {
	deposits: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		deposits: state.account.deposits
	};
}

export default connect(
	mapStateToProps
)(DepositPage);
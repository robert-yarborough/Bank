import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bankActions';

import {
	Button,
	Input,
	Divider,
	Header,
	Grid
} from 'semantic-ui-react';

class HomePage extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			amount: this.props.account.balance
		};
		this.handleChange = this.handleChange.bind(this);
		this.deposit = this.deposit.bind(this);
		this.withdraw = this.withdraw.bind(this);
	}

	handleChange(e){
		this.setState({amount:parseInt(e.target.value, 10)});
	}

	deposit(){
		this.props.actions.deposit(this.state.amount);
	}

	withdraw(){
		this.props.actions.withdraw(this.state.amount);
	}

	render(){
		const {account} = this.props.account;
		return (
			<div className="twelve wide column center aligned">

				<Divider/>

				<h2 className="ui icon header">
					<i className="university icon"/>
					<div className="content">
						React + Redux Bank
						<div className="sub header">dispatch(action) -> reducer -> new state -> re-render</div>
					</div>
				</h2>

				<Divider/>

				<h1>Current Balance<br/><span className={account.balance >= 0 ? "green" : "red"}>${account.balance}</span></h1>

				<Divider/>

				<Grid>

					<div className="eight wide column">

						<Header>Make a Deposit</Header>
						<Input type="number" onChange={this.handleChange}/><br/><br/>
						<Button className="green" onClick={this.deposit} placeholder="Enter $ Amount">Deposit</Button>

					</div>
					<div className="eight wide column">

						<Header>Make a Withdrawal</Header>
						<Input type="number" onChange={this.handleChange}/><br/><br/>
						<Button className="red" onClick={this.withdraw} placeholder="Enter $ Amount">Withdraw</Button>

					</div>

				</Grid>

			</div>
		);
	}
}

HomePage.propTypes = {
	account: PropTypes.object.isRequired,
	actions: PropTypes.object
};

function mapStateToProps(state) {
	return {
		account: state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../actions/createUsers';

class CreateUsers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newUser: {
				name: '',
				groups: []
			}
		}
	}

	HandleRemoveGroupFromNewUser = (group = '') => {
		const {groups} = this.state.newUser;
		const idx = groups.indexOf(group);

		if(idx !== -1) {
			this.setState(state => ({
				...state,
				newUser: {
					...state.newUser,
					groups: [
						...groups.slice(0, idx),
						...groups.slice(idx + 1)
					]
				}
			}))
		}

	}

	HandleAddGroupToNewUser = (group = '') => {
		this.setState(state => ({
			...state,
			newUser: {
				...state.newUser,
				groups: [...state.newUser.groups, group]
			}
		}))
	}

	isGroupAssigned = group => {
		const {groups} = this.state.newUser;
		return groups.indexOf(group) !== -1
	}

	handleGroupChange = (e, group) => {
		const {checked} = e.target;

		if(checked) {
			this.HandleAddGroupToNewUser(group)
		} else {
			this.HandleRemoveGroupFromNewUser(group)
		}
	}

	handleChangeUserInput = e => {
		const {value} = e.target;
		this.setState(state => ({
			...state,
			newUser: {
				...state.newUser,
				name: value
			}
		}))
	}

	handleCleanNewUser = () => {
		this.setState({
			newUser: {
				name: '',
				groups: []
			}
		})
	}

	handleAddUser(newUser) {
		this.props.addUser(newUser);
		this.handleCleanNewUser();
	}

	render () {
		const {newUser} = this.state;
		const {groups} = this.props;

		return (
			<section>
				<h2>Add User</h2>
				<label>
					Name:
				 <input type="text" value={newUser.name} onChange={this.handleChangeUserInput}/>

				 <h3>Assign Group </h3>
				 <ul>
				 	{groups.map((group, i) => (
				 		<li key={i}>
				 			<label>
				 			{group}
				 			<input type="checkbox"
				 					onChange={e => this.handleGroupChange(e, group)}
				 					checked={this.isGroupAssigned(group)}
				 			/>
				 			</label>
				 			</li>
				 		))}
				 	</ul>
				 	</label>
				 	<button onClick={() => this.handleAddUser(newUser)}>
				 		Add User 
				 	</button>
			</section>
		)
	}


}

const mapStateToProps = state => ({
	users: state.users,
	groups: state.groups
})
const mapDispatchToProps = dispatch =>({
	addUser: user => dispatch(addUser(user))
})

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(CreateUsers)
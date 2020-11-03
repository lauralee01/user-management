import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../actions/createUsers';
import Button from '../components/Button/Button';

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

	addUser(newUser) {
		if(newUser.name !== '')
		this.props.addUser(newUser);
		this.handleCleanNewUser();
		this.props.history.push('/users')
	}

	render () {
		const {newUser} = this.state;
		const {groups} = this.props;

		return (
			<section>
				<h2>Add User</h2>
				<label>
					Name:
					<input type="text" value={newUser.name} onChange={this.handleChangeUserInput} class="user-input"/>
					<h3>Assign Groups </h3>
						<table>
							<tbody>
								<tr>
									<th>Name</th>
									<th>Assign</th>
								</tr>
								{groups.map((group, i) => (
									<tr key={i}>
										<td>
											{group.name}
										</td>
										<td>
											<input type="checkbox" 
											onChange={e => this.handleGroupChange(e, group)}
											checked={this.isGroupAssigned(group)} />
										</td>
									</tr>
									))}
							</tbody>
						</table>
						<div className='button-container'>
						<Button label={'Add User'} onClick={() => this.addUser(newUser)} className="create-btn" />
					</div>
					</label>
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
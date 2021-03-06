import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeGroup} from '../actions/groups';
import Button from '../components/Button/Button';
import './styles.css'

class Groups extends React.Component {
	render(){
		const {users, groups} = this.props;
		
		return (
			<div>
			<h1>Groups</h1>
			{ groups.length !== 0
				?
				<table>
					<tbody>
						<tr>
							<th>Name</th>
							<th>Actions</th>
						</tr>
						{this.props.groups.map((group, i) => (
							<tr key={i}>
								<td>
									{group.name}
								</td>
								<td>
									<Link to={`/groups/${group.id}`} class="user-edit">Edit</Link>
									
									<a href="#" class="user-delete" style={{margin: 8}} onClick={() => this.props.removeGroup(group)}>
										Delete
									</a>
								</td>
							</tr>
							))}
					</tbody>
				</table>
				: <div><p>Sorry...there are no groups created</p></div>
			}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.users,
	groups: state.groups
})

const mapDispatchToProps = dispatch => ({
	removeGroup: group => dispatch(removeGroup(group))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Groups)
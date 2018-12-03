import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-redux';
import {editGroup} from '../actions/groups';
import './styles.css';

class Group extends React.Component{
	constructor (props) {
		super(props)
		this.state = {
			editedGroup: {
				id: '',
				name: ''
			}
		};
	}

	handleGetGroup = id => {
		const {groups} = this.props;
		return groups.find(group => group.id === +id)
	}

	handleChangeGroupInput = e => {
		const {value} = e.target;
		this.setState(state => ({
			...state,
			editedGroup: {
				...state.editedGroup,
				name: value
			}
		}))
	}
	handleCleanEditedGroup = () => {
		this.setState({
			editedGroup: {name: ''}
		})
	}

	handleEditGroup(editedGroup) {
		const groupId = this.props.match.params.id;
		const group = this.getGroup(groupId)
		const {groups} = this.props;
		const idx = groups.indexOf(group);

		if(!!editedGroup) {
			this.setState(state => ({
				...state,
				editedGroup: {
					...state.editedGroup,
					id: +groupId
				}
			}), () => {
				this.props.editGroup(idx, this.state.editedGroup)
				this.handleCleanEditedGroup();
			})
		} else {

		}
	}
	render() {
		const group = this.getGroup(this.props.match.params.id)
		
	return(
		<div>
			<h2>Group: {group.name}</h2>
			<label>Name: {group.name} </label>
			<hr />
			<div>
				<h3>Update with value</h3>
				<label>New name: </label>
				<input type="text" onChange={this.handleChangeGroupInput} value={this.state.editedGroup.name} />
			</div>
			<div className="button-container">
				<button style={{padding: 8}} onClick={() =>this.editGroup(this.state.editedGroup)}>
					Save
				</button>
			</div>
			
		</div>
	)
	}
}

const mapStateToProps = state => ({
	groups: state.groups
})
const mapDispatchToProps = dispatch => ({
	editGroup: (idx, editedGroup) => dispatch(editedGroup(idx, editedGroup))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Group)
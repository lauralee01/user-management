import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGroup} from '../actions/createGroups';

class CreateGroups extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newGroup: ''
		};
	}

	handleChangeGroupInput = (e) => {
		const {value} = e.target;
		this.setState({
			newGroup: value
		});
	}

	handleCleanNewGroup = () => {
		this.setState({
			newGroup: ''
		})
	}

	handleAddGroup(group) {
		this.props.addGroup(group);
		this.handleCleanNewGroup();
	}

	render() {
		const {newGroup} = this.state;
		return(
			<section>
				<h2>Add Group</h2>
				<label>
					Group Name:
					<input type="text" value={newGroup} onChange={this.handleChangeGroupInput}/>
				</label>
				<button onClick={() => this.handleAddGroup(newGroup)}>
					Add Group
				</button>
			</section>
		)
	}
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
	addGroup: group => dispatch(addGroup(group))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateGroups)
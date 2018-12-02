import React, { Component } from 'react';
import { Asidebar } from '../components';

export class AsidebarContainer extends Component {
	state = {
		items: [
			{key: 1, path:'/users', title:'Users'},
			{key: 1, path:'/groups', title:'Groups'}
		]
	}
	render() {
		return (
			<Asidebar items={this.state.items} />
		)
	}
}
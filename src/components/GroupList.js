import React from 'react';
import { PropTypes } from 'prop-types';

export const GroupList = (props) => {
	return (
		<div>
			<p>Groups</p>
			<ul>
				{props.groups.map(group => {
					return <li key={group.id}>{group.name}</li>
				})}
			</ul>
		</div>
	)
}

GroupList.PropTypes = {
	groups: PropTypes.array.isRequired
}
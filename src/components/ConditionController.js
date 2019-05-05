import React from 'react';

import { ConditionSelector, ConditionInput } from './index';

const ConditionController = props => {
	const { parentType } = props;

	if (!parentType) {
		return null;
	}

	return (
		<div className="card-header d-flex justify-content-between align-items-center">
			Condition
			<ConditionSelector {...props} />
			<ConditionInput {...props} />
		</div>
	);
};

export default ConditionController;

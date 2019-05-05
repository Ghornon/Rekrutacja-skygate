import React from 'react';

const ConditionInput = ({ parentType, element, handleOnChange }) => {
	if (parentType === 'radio') {
		return (
			<select
				className="app--input-condition"
				value={element.conditionValue}
				key={`condition_select_${element.id}`}
				onChange={event => {
					console.log(event.target.value);
					const payload = { ...element, conditionValue: event.target.value };
					handleOnChange(element.id, payload);
				}}
			>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		);
	}

	return (
		<input
			type={parentType} /* text/number */
			className="form-control"
			value={element.conditionValue}
			key={`condition_value_${element.id}`}
			onChange={event => {
				const payload = { ...element, conditionValue: event.target.value };
				handleOnChange(element.id, payload);
			}}
		/>
	);
};

export default ConditionInput;

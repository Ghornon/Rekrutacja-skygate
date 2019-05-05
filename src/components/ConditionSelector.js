import React from 'react';

const Condition = ({ parentType, element, handleOnChange }) => {
	const selectOptions = [
		{ value: 'equals', label: 'Equals' },
		{ value: 'greaterthan', label: 'Greater than' },
		{ value: 'lessthan', label: 'Less than' }
	].map(({ value, label }, index) => {
		const option = (
			<option value={value} key={`conditon_select_option_${element.id}_${index}`}>
				{label}
			</option>
		);

		if (parentType === 'number') {
			return option;
		}

		if (!index) {
			return option;
		}

		return false;
	});

	return (
		<select
			className="form-control"
			value={element.condition}
			onChange={event => {
				const payload = { ...element, condition: event.target.value };
				handleOnChange(element.id, payload);
			}}
		>
			{selectOptions}
		</select>
	);
};

export default Condition;

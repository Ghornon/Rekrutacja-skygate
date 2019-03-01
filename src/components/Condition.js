import React from 'react';

const Condition = ({ parentType, element, handleOnChange }) => {
	let Input = (
		<>
			<select
				className="app--input-condition"
				value={element.condition}
				onChange={event => {
					const payload = { ...element, condition: event.target.value };
					handleOnChange(element.id, payload);
				}}
			>
				<option value="equals">Equals</option>
			</select>
			<input
				type="text"
				className="app--input-condition"
				value={element.conditionValue}
				onChange={event => {
					const payload = { ...element, conditionValue: event.target.value };
					handleOnChange(element.id, payload);
				}}
			/>
		</>
	);

	if (parentType === 'number') {
		Input = (
			<>
				<select
					className="app--input-condition"
					value={element.condition}
					onChange={event => {
						const payload = { ...element, condition: event.target.value };
						handleOnChange(element.id, payload);
					}}
				>
					<option value="equals">Equals</option>
					<option value="greaterthan">Greater than</option>
					<option value="lessthan">Less than</option>
				</select>
				<input
					type="number"
					className="app--input-condition"
					value={element.conditionValue}
					onChange={event => {
						const payload = { ...element, conditionValue: event.target.value };
						handleOnChange(element.id, payload);
					}}
				/>
			</>
		);
	}

	if (parentType === 'radio') {
		Input = (
			<>
				<select
					className="app--input-condition"
					value={element.condition}
					onChange={event => {
						const payload = { ...element, condition: event.target.value };
						handleOnChange(element.id, payload);
					}}
				>
					<option value="equals">Equals</option>
				</select>
				<select
					className="app--input-condition"
					value={element.conditionValue}
					onChange={event => {
						console.log(event.target.value);
						const payload = { ...element, conditionValue: event.target.value };
						handleOnChange(element.id, payload);
					}}
				>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</>
		);
	}
	return <label className="app--label">Condition {Input}</label>;
};
export default Condition;

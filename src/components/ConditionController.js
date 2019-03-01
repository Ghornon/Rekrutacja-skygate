import React from 'react';

const ConditionController = ({ parentType, element, handleOnChange }) => {
	const selectOptions = [
		['equals', 'Equals'],
		['greaterthan', 'Greater than'],
		['lessthan', 'Less than']
	].map((conditon, index) => {
		const option = (
			<option value={conditon[0]} key={`conditon_select_option_${element.id}_${index}`}>
				{conditon[1]}
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

	const ConditionSelect = () => (
		<select
			className="app--input-condition"
			value={element.condition}
			onChange={event => {
				const payload = { ...element, condition: event.target.value };
				handleOnChange(element.id, payload);
			}}
		>
			{selectOptions}
		</select>
	);

	let conditionInput = (
		<input
			type={parentType}
			className="app--input-condition"
			value={element.conditionValue}
			key={`condition_value_${element.id}`}
			onChange={event => {
				const payload = { ...element, conditionValue: event.target.value };
				handleOnChange(element.id, payload);
			}}
		/>
	);

	if (parentType === 'radio') {
		conditionInput = (
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
		<label className="app--label">
			Condition
			<>
				<ConditionSelect />
				{/* <input
					type="text"
					className="app--input-condition"
					value={element.conditionValue}
					key={`condition_value_${element.id}`}
					onChange={event => {
						const payload = { ...element, conditionValue: event.target.value };
						handleOnChange(element.id, payload);
					}}
				/> */}
				{conditionInput}
				{/* <ConditionInput /> */}
			</>
		</label>
	);
};
export default ConditionController;

// const ConditionController = ({ parentType, element, handleOnChange }) => {
// 	let Input = (
// 		<>
// 			<select
// 				className="app--input-condition"
// 				value={element.condition}
// 				onChange={event => {
// 					const payload = { ...element, condition: event.target.value };
// 					handleOnChange(element.id, payload);
// 				}}
// 			>
// 				<option value="equals">Equals</option>
// 			</select>
// 			<input
// 				type="text"
// 				className="app--input-condition"
// 				value={element.conditionValue}
// 				onChange={event => {
// 					const payload = { ...element, conditionValue: event.target.value };
// 					handleOnChange(element.id, payload);
// 				}}
// 			/>
// 		</>
// 	);

// 	if (parentType === 'number') {
// 		Input = (
// 			<>
// 				<select
// 					className="app--input-condition"
// 					value={element.condition}
// 					onChange={event => {
// 						const payload = { ...element, condition: event.target.value };
// 						handleOnChange(element.id, payload);
// 					}}
// 				>
// 					<option value="equals">Equals</option>
// 					<option value="greaterthan">Greater than</option>
// 					<option value="lessthan">Less than</option>
// 				</select>
// 				<input
// 					type="number"
// 					className="app--input-condition"
// 					value={element.conditionValue}
// 					onChange={event => {
// 						const payload = { ...element, conditionValue: event.target.value };
// 						handleOnChange(element.id, payload);
// 					}}
// 				/>
// 			</>
// 		);
// 	}

// 	if (parentType === 'radio') {
// 		Input = (
// 			<>
// 				<select
// 					className="app--input-condition"
// 					value={element.condition}
// 					onChange={event => {
// 						const payload = { ...element, condition: event.target.value };
// 						handleOnChange(element.id, payload);
// 					}}
// 				>
// 					<option value="equals">Equals</option>
// 				</select>
// 				<select
// 					className="app--input-condition"
// 					value={element.conditionValue}
// 					onChange={event => {
// 						console.log(event.target.value);
// 						const payload = { ...element, conditionValue: event.target.value };
// 						handleOnChange(element.id, payload);
// 					}}
// 				>
// 					<option value="yes">Yes</option>
// 					<option value="no">No</option>
// 				</select>
// 			</>
// 		);
// 	}
// 	return <label className="app--label">Condition {Input}</label>;
// };
// export default ConditionController;

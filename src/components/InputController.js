import React from 'react';

import ConditionController from './ConditionController';
import { connectWithStore } from '../store/Store';

const InputControllerUI = ({ element, formData, handleOnChange, addElement, removeElement }) => {
	let controller = null;
	if (element.childOf) {
		controller = (
			<ConditionController
				parentType={
					formData.find(parentElement => parentElement.id === element.childOf).type
				}
				element={element}
				handleOnChange={handleOnChange}
			/>
		);
	}
	return (
		<div className="app--builder-box">
			{controller}
			<label className="app--label">
				Question{' '}
				<input
					type="text"
					className="app--input"
					key={`input_question_${element.id}`}
					name={`input_question_${element.id}`}
					value={element.question}
					onChange={event => {
						const payload = { ...element, question: event.target.value };
						handleOnChange(element.id, payload);
					}}
				/>
			</label>
			<label className="app--label">
				Type{' '}
				<select
					className="app--input"
					value={element.type}
					key={`input_type_${element.id}`}
					name={`input_type_${element.id}`}
					onChange={event => {
						const payload = { ...element, type: event.target.value };
						handleOnChange(element.id, payload);
						event.preventDefault();
					}}
				>
					<option value="text">Text</option>
					<option value="number">Number</option>
					<option value="radio">Yes / No</option>
				</select>
			</label>
			<input
				type="button"
				value="Add Sub-Input"
				className="app--button"
				onClick={() => {
					addElement(element.id);
				}}
			/>
			<input
				type="button"
				value="Delete"
				className="app--button"
				onClick={() => {
					removeElement(element.id);
				}}
			/>
		</div>
	);
};

const InputController = connectWithStore(InputControllerUI);
export default InputController;

import React from 'react';

import { connectWithStore } from '../store/Store';
import { ConditionController } from './index';

const BuilderBoxInputUI = ({ element, formData, handleOnChange, addElement, removeElement }) => {
	const parentType =
		formData.find(parentElement => parentElement.id === element.childOf) || false;

	return (
		<div className="app--builder-box card text-white">
			<ConditionController
				parentType={parentType.type}
				element={element}
				handleOnChange={handleOnChange}
			/>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<label className="app--label" htmlFor={`input_question_${element.id}`}>
						Question
					</label>
					<input
						type="text"
						className="form-control"
						key={`input_question_${element.id}`}
						name={`input_question_${element.id}`}
						id={`input_question_${element.id}`}
						value={element.question}
						onChange={event => {
							const payload = { ...element, question: event.target.value };
							handleOnChange(element.id, payload);
						}}
					/>
				</li>

				<li className="list-group-item">
					<label className="app--label" htmlFor={`input_type_${element.id}`}>
						Type
					</label>
					<select
						className="form-control"
						value={element.type}
						key={`input_type_${element.id}`}
						name={`input_type_${element.id}`}
						id={`input_type_${element.id}`}
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
				</li>
			</ul>

			<div className="card-footer d-flex justify-content-end align-items-center">
				<input
					type="button"
					value="Add Sub-Input"
					className="btn btn-outline-success"
					onClick={() => {
						addElement(element.id);
					}}
				/>

				<input
					type="button"
					value="Delete"
					className="btn btn-outline-danger"
					onClick={() => {
						removeElement(element.id);
					}}
				/>
			</div>
		</div>
	);
};

const BuilderBoxInput = connectWithStore(BuilderBoxInputUI);
export default BuilderBoxInput;

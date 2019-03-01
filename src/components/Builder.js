import React from 'react';

import Condition from './Condition';
import { connectWithStore } from '../store/Store';

const BuilderUI = props => {
	const { formData = [], parent, addElement, removeElement, handleOnChange } = props;
	const ListItems = formData.map(element => {
		if (element.childOf === parent) {
			const Item = () => {
				let condition = null;
				if (parent !== 0) {
					condition = (
						<Condition
							parentType={
								formData.find(parentElement => parentElement.id === element.childOf)
									.type
							}
							element={element}
							handleOnChange={handleOnChange}
						/>
					);
				}
				return (
					<div className="app--builder-box">
						{condition}
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
									// event.preventDefault();
								}}
							/>
						</label>
						<label className="app--label">
							Type{' '}
							<select
								className="app--input"
								value={element.type}
								key={`input_type_${element.id}`}
								name={`input_type${element.id}`}
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

			const childs = formData.filter(childElement => childElement.childOf === element.id);
			if (childs && childs.length) {
				const childProps = { ...props, parent: element.id };
				return (
					<li className="app--builder-item" key={element.id}>
						<Item />
						<BuilderUI {...childProps} />
					</li>
				);
			}

			return (
				<li className="app--builder-item" key={element.id}>
					<Item />
				</li>
			);
		}
		return false;
	});

	return <ul className="app--builder">{ListItems}</ul>;
};

const Builder = connectWithStore(BuilderUI);
export default Builder;

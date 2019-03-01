import React from 'react';
import InputController from './InputController';

const Box = ({ element, formData }) => {
	const childs = formData.filter(childElement => childElement.childOf === element.id);
	if (childs && childs.length) {
		const ChildItems = childs.map(child => (
			<Box element={child} formData={formData} key={`box_item_${child.id}`} />
		));
		return (
			<li className="app--builder-item" key={`list_item_${element.id}`}>
				<InputController element={element} />
				<ul className="app--builder">{ChildItems}</ul>
			</li>
		);
	}

	return (
		<li className="app--builder-item" key={element.id}>
			<InputController element={element} />
		</li>
	);
};

export default Box;

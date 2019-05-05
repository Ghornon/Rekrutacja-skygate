import React from 'react';

import { BuilderBoxInput } from './index';

const BuilderBox = ({ element, formData }) => {
	const childs = formData.filter(childElement => childElement.childOf === element.id);

	if (childs && childs.length) {
		const ChildItems = childs.map(child => (
			<BuilderBox element={child} formData={formData} key={`box_item_${child.id}`} />
		));

		return (
			<li className="app--builder-item" key={`list_item_${element.id}`}>
				<BuilderBoxInput element={element} />
				<ul className="app--builder">{ChildItems}</ul>
			</li>
		);
	}

	return (
		<li className="app--builder-item" key={element.id}>
			<BuilderBoxInput element={element} />
		</li>
	);
};

export default BuilderBox;

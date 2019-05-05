import React from 'react';

import { connectWithStore } from '../store/Store';
import { BuilderBox } from './index';

const BuilderUI = ({ formData = [] }) => {
	const listItems = formData.map(element => {
		if (element.childOf === 0) {
			return (
				<BuilderBox element={element} formData={formData} key={`box_item_${element.id}`} />
			);
		}
		return false;
	});

	return <ul className="app--builder">{listItems}</ul>;
};

const Builder = connectWithStore(BuilderUI);
export default Builder;

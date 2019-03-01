import React from 'react';

import { connectWithStore } from '../store/Store';
import Box from './Box';

const BuilderUI = ({ formData = [] }) => {
	const ListItems = formData.map(element => {
		if (element.childOf === 0) {
			return <Box element={element} formData={formData} key={`box_item_${element.id}`} />;
		}
		return false;
	});

	return <ul className="app--builder">{ListItems}</ul>;
};

const Builder = connectWithStore(BuilderUI);
export default Builder;

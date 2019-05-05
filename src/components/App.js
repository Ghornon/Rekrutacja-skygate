import React, { Component } from 'react';
import { Provider, connectWithStore } from '../store/Store';

import { Builder } from './index';

class App extends Component {
	render() {
		const AddInput = connectWithStore(({ addElement }) => (
			<input
				type="button"
				value="Add Input"
				className="btn btn-outline-primary"
				onClick={() => {
					addElement();
				}}
			/>
		));

		return (
			<Provider>
				<div className="app">
					<header className="app--header">
						<h1>Form Builder</h1>
					</header>
					<Builder />
					<AddInput />
				</div>
			</Provider>
		);
	}
}

export default App;

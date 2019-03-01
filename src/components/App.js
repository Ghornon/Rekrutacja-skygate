import React, { Component } from 'react';
import { Provider, connectWithStore } from '../store/Store';

import Builder from './Builder';

class App extends Component {
	render() {
		console.log(this.props);
		const AddInput = connectWithStore(({ addElement }) => (
			<input
				type="button"
				value="Add Input"
				className="app--button"
				onClick={() => {
					addElement(0);
				}}
			/>
		));

		return (
			<Provider>
				<div className="app">
					<header className="app--header">
						<h1>Form Builder</h1>
					</header>
					<Builder parent={0} />
					<AddInput />
				</div>
			</Provider>
		);
	}
}

export default App;

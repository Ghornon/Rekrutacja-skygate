import React, { Component } from 'react';
import { set, get } from 'idb-keyval';
import * as actions from '../actions/Actions';

const Context = React.createContext();

export class Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			primaryKey: 5,
			formData: []
		};
	}

	componentDidMount() {
		get('formData').then(formData =>
			formData ? this.setState({ formData }) : this.setState({ formData: [] })
		);
		get('primaryKey').then(primaryKey =>
			primaryKey ? this.setState({ primaryKey }) : this.setState({ primaryKey: 1 })
		);
	}

	componentDidUpdate() {
		const { formData, primaryKey } = this.state;
		set('formData', formData || [])
			.then(() => console.log('Saved in database'))
			.catch(err => console.log('Cannot save in database', err));

		set('primaryKey', primaryKey || 1)
			.then(() => console.log('Saved in database'))
			.catch(err => console.log('Cannot save in database', err));
	}

	attacheMethods() {
		const newActions = {};

		for (let i in actions) {
			newActions[i] = actions[i].bind(this);
		}

		return newActions;
	}

	render() {
		return (
			<Context.Provider value={{ ...this.state, ...this.attacheMethods() }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const connectWithStore = Container => {
	return class extends Component {
		render() {
			return (
				<Context.Consumer>
					{context => <Container {...context} {...this.props} />}
				</Context.Consumer>
			);
		}
	};
};

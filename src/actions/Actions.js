export function addElement(childOf = 0) {
	const newElement = {
		question: '',
		type: 'text',
		condition: 'equals',
		conditionValue: '',
		childOf,
		id: this.state.primaryKey + 1
	};

	this.setState({
		formData: [...this.state.formData, newElement],
		primaryKey: this.state.primaryKey + 1
	});
}

export function removeElement(id) {
	const hasChilds = this.state.formData.filter(element => element.childOf === id);

	if (hasChilds && hasChilds.length) {
		alert('Cannot delete element who contains child elements!');
	} else {
		const newState = this.state.formData.filter(element => element.id !== id);
		this.setState({ formData: newState });
	}
}

export function handleOnChange(index, payload) {
	const newState = [...this.state.formData].map(element => {
		if (element.id === index) {
			return payload;
		}
		return element;
	});

	this.setState({
		formData: [...newState]
	});
}

export function getStore() {
	return this.state;
}

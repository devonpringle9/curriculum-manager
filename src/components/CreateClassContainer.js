import React from "react"

class CreateClassContainer extends React.Component {
	state = {
		name: "",
		description: "",
	}

	prepareCreateClass = () => {
		var newClass = {
			name: this.state.name,
			description: this.state.description,
		};
		this.props.createClass(newClass);
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div id="create-class-frame">
				<form id="create-class-form">
					<h2>Create a class</h2>
					<h3>Class Name</h3>
					<input
						id="class-name-field"
						type="text"
						value={this.state.name}
						name="name"
						onChange={this.onChange}
					/>
					<h3>Description</h3>
					<input id="description-field"
						type="text"
						value={this.state.description}
						name="description"
						onChange={this.onChange}
					/>
					<h3>Add lessons</h3>
					<input id="lesson-field" />
				</form>
				<button
					className="cancel-button"
					onClick={() => this.props.showCreateClassContainer(false)}
				>
					Cancel
				</button>
				<button
					className="create-button"
					onClick={() => this.prepareCreateClass()}
				>
					Create
				</button>
			</div>
		)
	}
}

export default CreateClassContainer
import React from "react"

class CreateClassContainer extends React.Component {

	render() {
		return (
			<div id="create-class-frame">
				<form id="create-class-form">
					<h2>Create a class</h2>
					<h3>Class Name</h3>
					<input id="class-name-field" />
					<h3>Description</h3>
					<input id="description-field" />
					<h3>Add lessons</h3>
					<input id="lesson-field" />
				</form>
				<button
					className="cancel-button"
					onClick={() => this.props.showCreateClassContainer(false)}
				>
					Cancel
				</button>
				<button className="create-button">Create</button>
			</div>
		)
	}
}

export default CreateClassContainer
import React from "react"

class LessonItem extends React.Component {

	state = {
		description: this.props.selectedLesson.description,
	}

	TitleField = () => {
		if (this.props.selectedLesson.hasOwnProperty("name")) {
			return(
				<div className="lesson-title-header" >
					<h2>
						{this.props.selectedLesson.name}
					</h2>
					<button
						className='lesson-edit-button'
						onClick={() => this.props.lessonEditButtonAction(this.props.selectedClass.id,
								this.props.selectedLesson.id)}
					>
						edit
					</button>
				</div>
			);
		} else { return(null); }
	};

	DateField = () => {
		if (this.props.selectedLesson.hasOwnProperty("date")) {
			return(
				<div className="lesson-item" >
					{this.props.selectedLesson.date}
				</div>
			);
		} else { return(null); }
	};

	onChangeText = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	DescriptionField = () => {
		if (!this.props.selectedLesson.hasOwnProperty("description")) {
			// don't add the field when there is no info
			return(null);
		};

		if (this.props.selectedLesson.inEditMode) {	// edit the field
			return(
				<div className="lesson-item" >
					<textarea
						type="text"
						className="edit-text-input"
						placeholder="Add description..."
						value={this.state.description}
						name="description"
						onChange={this.onChangeText}
					/>
				</div>
			);
		} else {
			return(
				<div className="lesson-item" >
					{this.props.selectedLesson.description}
				</div>
			);
		};
	};

	CurriculumLinksField = () => {
		if (this.props.selectedLesson.hasOwnProperty("curriculumLinks")) {
			return(
				<div className="lesson-item" >
					<div className="lesson-item-header" >
						<h3>Curriculum Links</h3>
					</div>
					<ul>
						{this.props.selectedLesson.curriculumLinks.map( curriculumLink => (
							<li key={curriculumLink.id} >
								<a href={curriculumLink.url} >{curriculumLink.url}</a>
							</li>
						))}
					</ul>
				</div>
			);
		} else { return(null); }
	};

	LearningIntentionsField = () => {
		if (this.props.selectedLesson.hasOwnProperty("learningIntentions")) {
			return(
				<div className="lesson-item" >
					<div className="lesson-item-header" >
						<h3>Learning Intentions</h3>
					</div>
					{this.props.selectedLesson.learningIntentions}
				</div>
			);
		} else { return(null); }
	};

	SuccessCriteriaField = () => {
		if (this.props.selectedLesson.hasOwnProperty("successCriteria")) {
			return(
				<div className="lesson-item" >
					<div className="lesson-item-header" >
						<h3>Success Criteria</h3>
					</div>
					<ul>
						{Object.values(this.props.selectedLesson.successCriteria).map( successCriteria => (
							<li key={successCriteria.id} >
								<input
									type="checkbox"
									className="success-criteria-checkbox"
									checked={successCriteria.completed}
									onChange={() => this.props.successCriteriaClick(this.props.selectedClass.id, this.props.selectedLesson.id, successCriteria.id, successCriteria.completed)}
								/>
								{successCriteria.requirement}
							</li>
						))}
					</ul>
				</div>
			);
		} else { return(null); }
	};

	ViewMode = () => {
		return (
			<div>
				<this.TitleField />
				<this.DateField />
				<this.DescriptionField />
				<this.CurriculumLinksField />
				<this.LearningIntentionsField />
				<this.SuccessCriteriaField />
			</div>
		);
	}

	EditMode = () => {
		return (
			<div>
				<form
					className="edit-lesson"
					onSubmit={this.onSubmit}
				>
					<this.TitleField />
					<this.DateField />
					<this.DescriptionField />
					<this.CurriculumLinksField />
					<this.LearningIntentionsField />
					<this.SuccessCriteriaField />
					<button
						className="button-cancel"
						onClick={this.onCancel}
					>Cancel</button>
					<button className="button-submit">Submit</button>
				</form>
			</div>
		);
	}

	onSubmit = e => {
		e.preventDefault();
		let updates = this.state;
		this.props.saveEditLesson(this.props.selectedClass.id, this.props.selectedLesson.id,
				updates);
	}

	onCancel = e => {
		e.preventDefault();
		this.props.cancelEditLesson(this.props.selectedClass.id, this.props.selectedLesson.id);
	}

	render() {
		let inEditMode = this.props.selectedLesson.inEditMode;
		return(
			<div id="lesson-overview">
				{ !inEditMode &&
					<this.ViewMode />
				}
				{ inEditMode &&
					<this.EditMode />
				}
			</div>
		)
	}
}

export default LessonItem

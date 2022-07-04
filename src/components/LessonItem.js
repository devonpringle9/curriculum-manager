import React from "react"
import { v4 as uuidv4 } from "uuid";
class LessonItem extends React.Component {

	state = {
		description: this.props.selectedLesson.description,
		curriculumLinks: this.props.selectedLesson.curriculumLinks,
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
		// Handle no values, multiple values and edit mode for curriculum links. These are hyperlinks
		// and then input fields when in edit mode.
		let onChange = (i, e) => {
			this.setState(prevState => {
				let updatedLinks = prevState.curriculumLinks
				updatedLinks[i].url = e.target.value;
				return { curriculumLinks: updatedLinks }
			});
		};
		if (!this.props.selectedLesson.hasOwnProperty("curriculumLinks")) {
			// don't add the field when there is no info
			return(null);
		} else {
			if (this.props.selectedLesson.inEditMode) {	// edit the field
				// Loop through the curriculum links so that we can pass the index to the onChange handler.
				// Don't create a new function element for this because this will lose focus on every
				// render.
				// https://stackoverflow.com/questions/42573017/in-react-es6-why-does-the-input-field-lose-focus-after-typing-a-character
				let curriculumLinksInputs = [];
				this.state.curriculumLinks.forEach((link, i) => (
					curriculumLinksInputs.push(
						<li key={link.id} id={link.id}>
							<input
								type="text"
								placeholder="Link to curriculum"
								name="url"
								value={this.state.curriculumLinks[i].url}
								onChange={onChange.bind(this, i)}
							/>
						</li>
					)
				));
				return(
					<div className="lesson-item" >
						<div className="lesson-item-header" >
							<h3>Curriculum Links</h3>
						</div>
						<ul>
							{curriculumLinksInputs}
							<button type="button" onClick={this.addNewCurriculumLink}>+</button>
						</ul>
					</div>
				);
			} else {
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
			}
		}
	};

	addNewCurriculumLink = () => {
		this.setState(prevState => {
			let updatedCurriculumLinks = prevState.curriculumLinks.concat([{id: uuidv4(), url: ""}]);
			return { curriculumLinks: updatedCurriculumLinks };
		})
	}

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
					<this.ViewMode />
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

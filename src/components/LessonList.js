import React from "react"

class LessonList extends React.Component {

	isClicked = id => {
		if (this.props.selectedClass.selectedLesson === id) {
			return "list-button-clicked"
		}
		return ""
	}

	LessonsListElement = () => {
		if (this.props.selectedClass.lessons != undefined) {
			return(
				Object.values(this.props.selectedClass.lessons).map(lesson => (
					<li key={lesson.id}>
						<button
							className={`list-button ${this.isClicked(lesson.id)}`}
							onClick={() => this.props.updateSelectedLesson(lesson.id, this.props.selectedClass["id"])}
						>
							{lesson.name}
						</button>
					</li>
				))
			)
		} else {
			return(
				<li key="no-lessons">
					No lessons created for this class yet.<br/>Edit the class to add lessons.
				</li>
			)
		}
	}

	render() {
		return(
			<ul>
				<this.LessonsListElement />
			</ul>
		)
	}
}

export default LessonList

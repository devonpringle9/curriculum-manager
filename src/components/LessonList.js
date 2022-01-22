import React from "react"

class LessonList extends React.Component {

	isClicked = id => {
		if (this.props.selectedClass.selectedLesson === id) {
			return "list-button-clicked"
		}
		return ""
	}

	render() {
		return(
			<ul>
				{Object.values(this.props.selectedClass.lessons).map(lesson => (
					<li key={lesson.id}>
						<button
							className={`list-button ${this.isClicked(lesson.id)}`}
							onClick={() => this.props.updateSelectedLesson(lesson.id, this.props.selectedClass["id"])}
						>
							{lesson.name}
						</button>
					</li>
				))}
			</ul>
		)
	}
}

export default LessonList

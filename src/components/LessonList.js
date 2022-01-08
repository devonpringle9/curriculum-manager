import React from "react"

class LessonList extends React.Component {

	isClicked = id => {
		if (this.props.selectedClass.selectedLesson === id) {
			return "list-button-clicked"
		}
		return "adsf"
	}

	render() {
		return(
			<ul>
				{this.props.selectedClass.lessons.map(lesson => (
					<li key={lesson.id}>
						<button
							className={`list-button ${this.isClicked(lesson.id)}`}
							onClick={() => this.props.updateSelectedLesson(lesson.id)}
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

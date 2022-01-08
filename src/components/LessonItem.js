import React from "react"

class LessonItem extends React.Component {
	render() {
		return(
			<div id="lesson-overview">
				<div className="lesson-title-header" >
					<h2>
						{this.props.selectedLesson.name}
					</h2>
					<button>edit</button>
				</div>
				<div className="lesson-item" >
					{this.props.selectedLesson.date}
				</div>
				<div className="lesson-item" >
					{this.props.selectedLesson.description}
				</div>
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
				<div className="lesson-item" >
					<div className="lesson-item-header" >
						<h3>Learning Intentions</h3>
					</div>
					{this.props.selectedLesson.learningIntentions}
				</div>
				<div className="lesson-item" >
					<div className="lesson-item-header" >
						<h3>Success Criteria</h3>
					</div>
					<ul>
						{this.props.selectedLesson.successCriteria.map( successCriteria => (
							<li key={successCriteria.id} >
								<input type="checkbox" className="success-criteria-checkbox" />
								{successCriteria.requirement}
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default LessonItem

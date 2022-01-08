import React from "react"

import ClassHeader from "./ClassHeader"
import LessonList from "./LessonList"
import LessonItem from "./LessonItem"
import CreateClassContainer from "./CreateClassContainer"

//stylesheet
import "../App.css"

class ClassContainer extends React.Component {

	state = {
		classes: [ {
			id: "class1",
			description: "Used for chemistry.",
			name: "Chemistry",
			lessons: [
				{
					id: "chemistry-lesson1",
					name: "lesson1",
					date: "1/1/2022 10:00am",
					description: "Beginning with chemistry basics 1",
					learningIntentions: "Students will understand the components of a hydogen atom. " +
															"Students will be introduced to the shells of an atom.",
					successCriteria: [
						{id: "successCriteria-1", requirement: "Explained electrons", completed: false, },
						{id: "successCriteria-2", requirement: "Handout of atom diagram", completed: false, },
						{id: "successCriteria-3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
					],
					curriculumLinks: [
						{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
					],
				},
				{
					id: "chemistry-lesson2",
					name: "lesson2",
					date: "1/1/2022 10:00am",
					description: "Beginning with chemistry basics 2",
					learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
					successCriteria: [
						{id: "successCriteria-1", requirement: "Explained electrons", completed: false, },
						{id: "successCriteria-2", requirement: "Handout of atom diagram", completed: false, },
						{id: "successCriteria-3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
					],
					curriculumLinks: [
						{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
					],
				},
				{
					id: "chemistry-lesson3",
					name: "lesson3",
					date: "1/1/2022 10:00am",
					description: "Beginning with chemistry basics 3",
					learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
					successCriteria: [
						{id: "successCriteria-1", requirement: "Explained electrons", completed: false, },
						{id: "successCriteria-2", requirement: "Handout of atom diagram", completed: false, },
						{id: "successCriteria-3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
					],
					curriculumLinks: [
						{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
					],
				},
			],
			selectedLesson: "chemistry-lesson1",
			},
			{
				id: "class2",
				description: "Used for biology.",
				name: "Biology",
				lessons: [
					{
						id: "biology-lesson1",
						name: "lesson1",
						date: "1/1/2022 10:00am",
						description: "Beginning with biology basics 1",
						learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
						successCriteria: [
							{id: "successCriteria-1", requirement: "Explained electrons", completed: false, },
							{id: "successCriteria-2", requirement: "Handout of atom diagram", completed: false, },
							{id: "successCriteria-3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						],
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
					{
						id: "biology-lesson2",
						name: "lesson2",
						date: "1/1/2022 10:00am",
						description: "Beginning with biology basics 2",
						learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
						successCriteria: [
							{id: "successCriteria-1", requirement: "Explained electrons", completed: false, },
							{id: "successCriteria-2", requirement: "Handout of atom diagram", completed: false, },
							{id: "successCriteria-3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						],
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
					{
						id: "biology-lesson3",
						name: "lesson3",
						date: "1/1/2022 10:00am",
						description: "Beginning with biology basics 3",
						learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
						successCriteria: [
							{id: "successCriteria-1", requirement: "Explained electrons", completed: false, },
							{id: "successCriteria-2", requirement: "Handout of atom diagram", completed: false, },
							{id: "successCriteria-3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						],
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
				],
				selectedLesson: "biology-lesson1",
			},
		],

		selectedClass: "class1",
		showCreateClassContainerToggle: false,
	}

	updateSelectedClass = id => {
		this.setState({
			selectedClass: id
		});
	}

	updateSelectedLesson = id => {
		this.setState(prevState => ({
			classes: prevState.classes.map(thisClass => {
				if (thisClass.id == prevState.selectedClass) {
					thisClass.selectedLesson = id
				}
				return thisClass
			})
		}));
	}

	showCreateClassContainer = open => {
		this.setState({ showCreateClassContainerToggle: open });
	}

	render() {
		let selectedClass = this.state.classes.find(thisClass => {
			return thisClass.id === this.state.selectedClass;
		})
		let selectedLesson = selectedClass.lessons.find(lesson => {
			return lesson.id === selectedClass.selectedLesson;
		})

		return(
			<div id="main-container" >
				<div className="container" >
					<ClassHeader
						classes={this.state.classes}
						updateSelectedClass={this.updateSelectedClass}
						selectedClass={this.state.selectedClass}
						showCreateClassContainer={this.showCreateClassContainer}
					/>
					<div className="inner" >
						<LessonList
							selectedClass={selectedClass}
							updateSelectedLesson={this.updateSelectedLesson}
						/>
						<LessonItem selectedLesson={selectedLesson} />
					</div>
				</div>
				{ this.state.showCreateClassContainerToggle &&
					<div
						id="create-class-container"
					>
						<CreateClassContainer 
							showCreateClassContainer={this.showCreateClassContainer}
						/>
					</div>
				}
			</div>
		);
	}
}

export default ClassContainer

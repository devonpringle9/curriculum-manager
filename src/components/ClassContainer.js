import React from "react"

import ClassHeader from "./ClassHeader"
import LessonList from "./LessonList"
import LessonItem from "./LessonItem"
import CreateClassContainer from "./CreateClassContainer"

//stylesheet
import "../App.css"

class ClassContainer extends React.Component {

	state = {
		classes: {
			class1: {
				id: "class1",
				description: "Used for chemistry.",
				name: "Chemistry",
				lessons: {
					chemistry_lesson1: {
						id: "chemistry_lesson1",
						name: "lesson1",
						date: "1/1/2022 10:00am",
						description: "Beginning with chemistry basics 1",
						learningIntentions: "Students will understand the components of a hydogen atom. " +
																"Students will be introduced to the shells of an atom.",
						successCriteria: {
							successCriteria_1: {id: "successCriteria_1", requirement: "Explained electrons", completed: false, },
							successCriteria_2: {id: "successCriteria_2", requirement: "Handout of atom diagram", completed: false, },
							successCriteria_3: {id: "successCriteria_3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						},
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
					chemistry_lesson2: {
						id: "chemistry_lesson2",
						name: "lesson2",
						date: "1/1/2022 10:00am",
						description: "Beginning with chemistry basics 2",
						learningIntentions: "Students will understand the components of a hydogen atom." +
																"Students will be introduced to the shells of an atom.",
						successCriteria: {
							successCriteria_1: {id: "successCriteria_1", requirement: "Explained electrons", completed: false, },
							successCriteria_2: {id: "successCriteria_2", requirement: "Handout of atom diagram", completed: false, },
							successCriteria_3: {id: "successCriteria_3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						},
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
					chemistry_lesson3: {
						id: "chemistry_lesson3",
						name: "lesson3",
						date: "1/1/2022 10:00am",
						description: "Beginning with chemistry basics 3",
						learningIntentions: "Students will understand the components of a hydogen atom." +
																"Students will be introduced to the shells of an atom.",
						successCriteria: {
							successCriteria_1: {id: "successCriteria_1", requirement: "Explained electrons", completed: false, },
							successCriteria_2: {id: "successCriteria_2", requirement: "Handout of atom diagram", completed: false, },
							successCriteria_3: {id: "successCriteria_3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						},
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
				},
				selectedLesson: "chemistry_lesson1",
				},
			class2: {
				id: "class2",
				description: "Used for biology.",
				name: "Biology",
				lessons: {
					biology_lesson1: {
						id: "biology_lesson1",
						name: "lesson1",
						date: "1/1/2022 10:00am",
						description: "Beginning with biology basics 1",
						learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
						successCriteria: {
							successCriteria_1: {id: "successCriteria_1", requirement: "Explained electrons", completed: false, },
							successCriteria_2: {id: "successCriteria_2", requirement: "Handout of atom diagram", completed: false, },
							successCriteria_3: {id: "successCriteria_3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						},
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
					biology_lesson2: {
						id: "biology_lesson2",
						name: "lesson2",
						date: "1/1/2022 10:00am",
						description: "Beginning with biology basics 2",
						learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
						successCriteria: {
							successCriteria_1: {id: "successCriteria_1", requirement: "Explained electrons", completed: false, },
							successCriteria_2: {id: "successCriteria_2", requirement: "Handout of atom diagram", completed: false, },
							successCriteria_3: {id: "successCriteria_3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						},
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
					biology_lesson3: {
						id: "biology_lesson3",
						name: "lesson3",
						date: "1/1/2022 10:00am",
						description: "Beginning with biology basics 3",
						learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
						successCriteria: {
							successCriteria_1: {id: "successCriteria_1", requirement: "Explained electrons", completed: false, },
							successCriteria_2: {id: "successCriteria_2", requirement: "Handout of atom diagram", completed: false, },
							successCriteria_3: {id: "successCriteria_3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						},
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
				},
				selectedLesson: "biology_lesson1",
			},
			class3: {
				id: "class3",
				description: "Used for physics.",
				name: "Physics",
				lessons: {
					physics_lesson1: {
						id: "physics_lesson1",
						name: "lesson1",
					},
					physics_lesson2: {
						id: "physics_lesson2",
						name: "lesson2",
						date: "1/1/2022 10:00am",
						description: "Beginning with physics basics 2",
						learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
						successCriteria: {
							successCriteria_1: {id: "successCriteria_1", requirement: "Explained electrons", completed: false, },
							successCriteria_2: {id: "successCriteria_2", requirement: "Handout of atom diagram", completed: false, },
							successCriteria_3: {id: "successCriteria_3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						},
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
					physics_lesson3: {
						id: "physics_lesson3",
						name: "lesson3",
						date: "1/1/2022 10:00am",
						description: "Beginning with physics basics 3",
						learningIntentions: "Students will understand the components of a hydogen atom." +
															"Students will be introduced to the shells of an atom.",
						successCriteria: {
							successCriteria_1: {id: "successCriteria_1", requirement: "Explained electrons", completed: false, },
							successCriteria_2: {id: "successCriteria_2", requirement: "Handout of atom diagram", completed: false, },
							successCriteria_3: {id: "successCriteria_3", requirement: "Talk about electrical neutrality of an atom", completed: false, },
						},
						curriculumLinks: [
							{id: "curriculumLink-1", url: "www.link-to-curriculum.com"},
						],
					},
				},
				selectedLesson: "physics_lesson1",
			},
		},

		selectedClass: "class1",
		showCreateClassContainerToggle: false,
	}

	updateSelectedClass = id => {
		this.setState({
			selectedClass: id
		});
	}

	updateSelectedLesson = (lessonId, classId) => {
		// Take in a lesson id and update the selectedLesson value to be this new id.
		this.setState(prevState => {
			prevState.classes[classId].selectedLesson = lessonId;
			return { prevState };
		});
	}

	showCreateClassContainer = open => {
		this.setState({ showCreateClassContainerToggle: open });
	}

	successCriteriaClick = (classId, lessonId, successCriteriaId, toggleValue) => {
		this.setState(prevState => {
			prevState.classes[classId].lessons[lessonId].successCriteria[successCriteriaId].completed = !toggleValue;
			return { prevState };
		});
	}

	render() {
		let selectedClass = this.state.classes[this.state.selectedClass];
		let lessonsAreAvailable = selectedClass.lessons != undefined;
		let selectedLesson;
		if (lessonsAreAvailable) {
			selectedLesson = selectedClass.lessons[selectedClass.selectedLesson];
		} else {
			selectedLesson = null;
		}

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
						{lessonsAreAvailable &&
						<LessonItem
							selectedClass={selectedClass}
							selectedLesson={selectedLesson}
							successCriteriaClick={this.successCriteriaClick}
						/>}
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

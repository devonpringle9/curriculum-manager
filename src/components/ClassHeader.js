import React from "react"

class ClassHeader extends React.Component {

  clickClassHeaderButton = id => {
    this.props.updateSelectedClass(id);
  }


  isClicked = id => {
    if (this.props.selectedClass === id) {
      return "header-button-clicked"
    }
    return ""
  }

  render() {
    const style = {
      display: "flex",
    }

    return(
      <div className="left">
        <ul style={style} >
          {this.props.classes.map(thisClass => (
            <li key={thisClass.id}>
              <button
                className={`header-button ${this.isClicked(thisClass.id)}`}
                onClick={() => this.clickClassHeaderButton(thisClass.id)}
              >{thisClass.name}</button>
            </li>
          ))}
          <li key="create-new-class" >
            <button
              className={`header-button`}
              id="create-new-class"
              onClick={() => this.props.showCreateClassContainer(true)}
            >+</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ClassHeader

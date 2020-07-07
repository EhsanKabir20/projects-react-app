import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Projects from "../components/Projects/Projects";
import AddProjectPanel from "../components/AddProjectPanel/AddProjectPanel";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

class ProjectsContainer extends React.Component {
  onDragEnd = (result) => {
    this.props.insertProject(result);
  };

  render() {
    return (
      <Container>
        <div className="ProjectsContainer">
          <h2>Projects</h2>
          <hr />
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Projects projects={this.props.projects} />
            <AddProjectPanel />
          </DragDropContext>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertProject: (result) =>
      dispatch({ type: "INSERT_PROJECT", data: result }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);

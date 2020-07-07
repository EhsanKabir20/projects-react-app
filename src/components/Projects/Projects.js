import React from "react";
import { Droppable } from "react-beautiful-dnd";
import {
  GetProjectListContainerStyle,
  GetProjectContainerStyle,
} from "../../helpers/ListHelper";
import SubProjects from "./SubProjects";

class Projects extends React.Component {
  render() {
    let projectList = this.props.projects.filter(
      (p) => p.parentProjectId === null
    );
    return (
      <Droppable droppableId="projects">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={GetProjectListContainerStyle(snapshot.isDraggingOver)}
          >
            {projectList.map((project, index) => {
              let subProjects = this.props.projects.filter(
                (p) => p.parentProjectId === project.projectId
              );
              return (
                <Droppable
                  key={project.projectId}
                  droppableId={"" + project.projectId}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      index={index}
                      style={GetProjectContainerStyle(snapshot.isDraggingOver)}
                      className="Project"
                    >
                      <h5>{index + 1 + ". " + project.name}</h5>
                      <SubProjects
                        questionNum={index}
                        project={project}
                        subProjects={subProjects}
                      />
                    </div>
                  )}
                </Droppable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default Projects;

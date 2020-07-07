import { Projects } from "../components/AddProjectPanel/Projects";
import { InsertProject } from "../helpers/ListHelper";

const initialState = {
  projects: [
    {
      projectId: 1,
      name: "Workflow Management System",
      parentProjectId: null,
    },
    {
      projectId: 2,
      name: "Task Management System",
      parentProjectId: 1,
    },
    {
      projectId: 3,
      name: "Team Management",
      parentProjectId: 1,
    },
  ],
};

const reducer = (state = initialState, action) => {
  let updatedState = { ...state };
  if (action.type === "INSERT_PROJECT") {
    const { source, destination } = action.data;
    if (!destination) {
      return updatedState;
    }
    if (destination.droppableId === "projects") {
      const updatedProjects = InsertProject(
        updatedState.projects,
        Projects[source.index].name
      );
      updatedState.projects = updatedProjects;
    } else {
      let updatedProjects = [...updatedState.projects];
      const destinationIndex = updatedProjects.findIndex(
        (x) => x.projectId.toString() === destination.droppableId
      );
      let destinationProject = updatedProjects[destinationIndex];
      updatedProjects = InsertProject(
        updatedState.projects,
        Projects[source.index].name,
        destinationProject.projectId
      );
      updatedState.projects = updatedProjects;
    }
  }
  return updatedState;
};

export default reducer;

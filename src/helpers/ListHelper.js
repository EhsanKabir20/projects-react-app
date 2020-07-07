export const InsertProject = (list, name, parentProjectId) => {
  const projectList = Array.from(list);
  const projectAdded = {
    projectId: parseInt(Math.random() * 1000),
    name: name,
    parentProjectId: parentProjectId && parentProjectId > 0 ? parentProjectId : null
  };
  projectList.push(projectAdded);
  return projectList;
};

export const GetProjectListContainerStyle = (isDraggingOver) => ({
  border: isDraggingOver ? "2px solid black" : "2px solid transparent",
  padding: "40px 0",
});

export const GetProjectContainerStyle = (isDraggingOver) => ({
  border: isDraggingOver ? "2px solid black" : "2px solid transparent",
  padding: "10px",
});

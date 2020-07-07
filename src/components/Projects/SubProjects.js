import React from "react";

const SubProjects = (props) => {
  let subProjectsContent = null;
  if (props.subProjects) {
    subProjectsContent = props.subProjects.map((sp, index) => {
      return (
        <div key={sp.projectId} className="subProject">
          {sp.name}
        </div>
      );
    });
  }
  return subProjectsContent;
};

export default SubProjects;

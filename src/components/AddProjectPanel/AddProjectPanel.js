import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Item, List } from "../../utils";
import styled from "styled-components";
import { Projects } from "./Projects";
const Clone = styled(Item)`
  ~ div {
    transform: none !important;
    cursor: pointer;
  }
`;

const PanelItem = styled(List)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  background: rgb(212, 212, 212);
  overflow: auto;
`;

const AddProjectPanel = (props) => {
  return (
    <Droppable droppableId="ITEMS" isDropDisabled={true}>
      {(provided, snapshot) => (
        <PanelItem
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
          <div className="cardHeader">
            <div>Add Project</div>
          </div>
          {Projects.map((item, index) => (
            <Draggable
              key={item.projectId}
              draggableId={"" + item.projectId}
              index={index}
            >
              {(provided, snapshot) => (
                <React.Fragment>
                  <Item
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    style={{
                      ...provided.draggableProps.style,
                      fontSize: "0.85em",
                    }}
                    index={index}
                  >
                    {item.name}
                  </Item>
                  {snapshot.isDragging && <Clone>{item.name}</Clone>}
                </React.Fragment>
              )}
            </Draggable>
          ))}
        </PanelItem>
      )}
    </Droppable>
  );
};

export default AddProjectPanel;

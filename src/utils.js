import styled from 'styled-components';

// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
/**
 * Moves an item from one list to another list.
 */
export const copy = (source, destination, droppableSource, droppableDestination, template) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];
    destClone.splice(droppableDestination.index, 0, { ...item, nodePartId: parseInt(Math.random() * 100), template: item.template ? item.template : template ? template : "" });
    return destClone;
};

export const move = (zones, sourceIndex, destinationIndex, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(zones[sourceIndex].nodeParts);
    const destClone = Array.from(zones[destinationIndex].nodeParts);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);
    zones[sourceIndex] = {
        ...zones[sourceIndex],
        nodeParts: sourceClone
    }
    zones[destinationIndex] = {
        ...zones[destinationIndex],
        nodeParts: destClone
    }
    return zones;
};

export const Notice = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 0 0.5rem 0.5rem;
    border: 1px solid transparent;
    line-height: 1.5;
    color: #aaa;
`;

export const List = styled.div`
    border: 1px
        ${props => (props.isDraggingOver ? 'dashed #000' : 'solid #ddd')};
    background: #fff;
    padding: 0.5rem 0.5rem 0;
    border-radius: 3px;
    flex: 0 0 150px;
    font-family: sans-serif;
    z-index: 99;
`;

export const Item = styled.div`
    display: flex;
    user-select: none;
    padding: 0.5rem;
    margin: 0 0 0.5rem 0;
    align-items: flex-start;
    align-content: flex-start;
    line-height: 1.5;
    border-radius: 3px;
    background: #fff;
    border: 1px ${props => (props.isDragging ? 'dashed #000' : 'solid #ddd')};
    
`;

export const Content = styled.div`
    margin-right: 200px;
`;


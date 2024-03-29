import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import {SortableContainer} from 'react-sortable-hoc';

const DraggableColorList = ({colors, removeColor}) => {
  return (
    <div style={{minHeight: '100dvh', height: '100dvh', paddingTop: '65px'}}>
      {colors.map((item, indx) => (
      <DraggableColorBox
        index={indx}
        key={item.name}
        color={item.color}
        name={item.name}
        handleDelete={()=> removeColor(item.name)}
      />
    ))}
    </div>
  );
}

export default SortableContainer(DraggableColorList);
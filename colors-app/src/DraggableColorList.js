import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import {SortableContainer} from 'react-sortable-hoc';

const DraggableColorList = ({colors, removeColor}) => {
  return (
    <div style={{height: '80vh'}}>
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
  )
}

export default SortableContainer(DraggableColorList);
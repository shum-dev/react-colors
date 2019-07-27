import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palete extends Component {
  render() {
    const colorBoxes = this.props.colors.map(item => (
      <ColorBox background={item.color} name={item.name}/>
    ));
    return (
      <div className='Palette'>
        <div className='Palette-colors'>
        {colorBoxes}
        </div>
      </div>
    );
  }
}

export default Palete;
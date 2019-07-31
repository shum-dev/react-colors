import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return(
      <div>
        <h1>React Palette List</h1>
        {palettes.map(item => (
          <MiniPalette {...item}/>
        ))}
      </div>
    )
  }
}
export default PaletteList
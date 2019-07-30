import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return(
      <div>
        <h1>React Palette List</h1>
        {palettes.map(item => (
          <p>
            <Link to={`/palette/${item.id}`}>{item.paletteName}</Link>
          </p>
        ))}
      </div>
    )
  }
}
export default PaletteList
import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }
  gatherShades(palette, colorToFilterBy) {
    //return all shades of given color
    let shades = [];
    let allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat(allColors[key].filter(item => item.id === colorToFilterBy));
    }
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map(item => (
      <ColorBox key={item.id} name={item.name} background={item.hex} hideLink={true}/>
    ));
    return (
      <div className='Palette'>
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
      </div>
    )
  }
}
export default SingleColorPalette;
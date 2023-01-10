import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex',
    }
    this.changeFormat = this.changeFormat.bind(this);
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
  changeFormat(format) {
    this.setState({format});
  }
  render() {
    const {paletteName, emoji, id} = this.props.palette;
    const {classes} = this.props;
    const colorBoxes = this._shades.map(item => (
      <ColorBox key={item.name} name={item.name} background={item[this.state.format]} singleColorPalette={true}/>
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} hideSlider={true}/>
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}
export default withStyles(styles)(SingleColorPalette);
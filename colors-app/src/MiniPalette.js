import React from 'react';
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';


function MiniPalette(props) {
  const {classes, paletteName, emoji, colors, handleClick} = props;
  const miniColorBoxes = colors.map(item => (
    <div
      className={classes.miniColor}
      style={{backgroundColor: item.color}}
      key={item.name}></div>
  ))
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
import React from 'react';
import styles from './styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends React.PureComponent {
  deletePalette = (e) => {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  };
  handleClick = () => {
    this.props.goToPalette(this.props.id);
  };
  render() {
    const {classes, paletteName, emoji, colors} = this.props;
    const miniColorBoxes = colors.map(item => (
      <div
        className={classes.miniColor}
        style={{backgroundColor: item.color}}
        key={item.name}></div>
    ))
    return (
      <div className={classes.root} onClick={this.handleClick}>
          <DeleteIcon
            className={classes.deleteIcon}
            style={{transition:'all 0.3s ease-in-out'}}
            onClick={this.deletePalette}
          />
        <div className={classes.colors}>
          {miniColorBoxes}
        </div>
        <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
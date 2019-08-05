import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import styles from './styles/NewPaletteFormStyle';

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  }
  constructor(props) {
    super(props);
    let starterColors;
    try{
      starterColors = this.props.palettes[0].colors;
    } catch(e){
      starterColors = [];
    }
    this.state = {
      open: true,
      colors: starterColors,
    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  addNewColor = (newColor) => {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ''
    })
  };
  handleSubmit = (newPaletteName, emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: emoji,
      colors: this.state.colors
    }
    this.props.savePalette(newPalette);
    this.props.history.push('/')
  }
  removeColor = (colorName) => {
    this.setState({
      colors: this.state.colors.filter(item => item.name !== colorName)
    });
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState((prevState) => ({
      colors: arrayMove(prevState.colors, oldIndex, newIndex)
    }));
  }
  clearColors = () => {
    this.setState({colors: []});
  }
  randomColor = () => {
    const allColors = this.props.palettes.map(item => item.colors).flat();
    const rand = Math.floor(Math.random()*allColors.length);
    this.setState({
      colors: [...this.state.colors, allColors[rand]]
    })
  }
  render() {
    const { classes, maxColors, palettes} = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                variant='contained'
                color='secondary'
                onClick={this.clearColors}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={this.randomColor}
                disabled={paletteIsFull}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              paletteIsFull={paletteIsFull}
              addNewColor={this.addNewColor}
              colors={this.state.colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
            distance={10}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
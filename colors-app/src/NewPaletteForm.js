import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    border: '1px solid black',
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentColor: '',
      colors: [{color: 'teal', name: 'starter'}],
      newColorName: '',
      newPaletteName: ''
    }
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => (
      this.state.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    ));
    ValidatorForm.addValidationRule('isColorUnique', (value) => (
      this.state.colors.every(
        ({color}) => color !== this.state.currentColor
      )
    ));
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => (
      this.props.palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    ));
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  updateCurrentColor = (newColor) => {
    const color = newColor.rgb;
    this.setState({currentColor: `rgba(${color.r},${color.g},${color.b},${color.a})`});
  };
  addNewColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ''
    })
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  handleSubmit = () => {
    let newName= this.state.newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, '-'),
      emoji: '',
      colors: this.state.colors
    }
    this.props.savePalette(newPalette);
    this.props.history.push('/')
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                Persistent drawer
              </Typography>
            <div>
              <ValidatorForm onSubmit={this.handleSubmit}>
                <TextValidator
                  name='newPaletteName'
                  label='Palette Name'
                  value={this.state.newPaletteName}
                  onChange={this.handleChange}
                  validators={['required', 'isPaletteNameUnique', 'isPaletteUnique']}
                  errorMessages={['Palette name is required', 'Palette name must be unique', 'Palette already exists!']}
                />
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                >
                    Save Palette
                </Button>
              </ValidatorForm>
            </div>

          </Toolbar>
        </AppBar>
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
          <Typography variant='h4'>Design Your Palette</Typography>
          <div>
            <Button variant='contained' color='secondary'>
              Clear Palette
            </Button>
            <Button variant='contained' color='primary'>
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              name='newColorName'
              value={this.state.newColorName}
              onChange={this.handleChange}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['Color name is required', 'Color name must be unique', 'Color already used!']}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{backgroundColor: this.state.currentColor}}
            >
              Add Color
            </Button>
          </ValidatorForm>


        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            {this.state.colors.map(item => (
              <DraggableColorBox color={item.color} name={item.name}/>
            ))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
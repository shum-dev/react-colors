import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Slider from 'rc-slider';

import styles from './styles/NavbarStyles';
import 'rc-slider/assets/index.css';

function TransitionRight(props) {
  return <Slide {...props} direction='right'/>;
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      open: false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange = Transition => (e) => {
    this.setState({ format: e.target.value, open: true, Transition}, () => this.props.handleChange(this.state.format));
  }
  closeSnackbar() {
    this.setState({open: false})
  }
  render() {
    const { level, changeLevel, hideSlider, classes } = this.props;
    return(
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to='/'>reactcolorpicker</Link>
        </div>
        {
          !hideSlider &&
          <div className={classes.sliderContainer}>
            <span>Level: {level}</span>
              <div className={classes.slider}>
                <Slider
                  defaultValue={level}
                  min={100}
                  max={900}
                  step={100}
                  onChange={changeLevel}
                />
              </div>
          </div>
        }
        <div className={classes.selectContainer}>
          <Select value={this.state.format} onChange={this.handleFormatChange(TransitionRight)}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          TransitionComponent={this.state.Transition}
          action={[
            <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close'>
              <CloseIcon />
            </IconButton>
          ]}
          ContentProps={{'aria-describedby': 'message-id'}}
          message={<span id='message-id'>Format Changed To {this.state.format.toUpperCase()}</span>}
        />
      </header>
    )
  }
}

export default withStyles(styles)(Navbar)
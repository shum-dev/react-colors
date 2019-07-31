import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
  ColorBox: {
    width: '20%',
    height: props => props.singleColorPalette ? '40%' : '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() <= 0.2 ? 'white' : 'rgba(0,0,0,0.7)'
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.2 ? 'white' : 'rgba(0,0,0,0.7)'
  },
  seeMore: {
    color: props => chroma(props.background).luminance() <= 0.2 ? 'white' : 'rgba(0,0,0,0.7)',
    background: 'rgba(255, 255, 255, .3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyButton: {
    color: props => chroma(props.background).luminance() <= 0.2 ? 'white' : 'rgba(0,0,0,0.7)',
    background: 'rgba(255, 255, 255, .3)',
    display: 'inline-block',
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    transition: '.4s',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: '0',
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  copyOverlay: {
    position: 'absolute',
    zIndex: '-1',
    width: '100%',
    height: '100%',
    transition: '0.6s ease-in',
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(10)',
    zIndex: '101',
    position: 'absolute'
  },
  copyMessage: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    transition: 'all 0.4s ease-in-out',
    zIndex: '102',
    pointerEvents: 'none',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255,255,255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '200',
    }
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '102',
    transitionDelay: '0.3s'
  }
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState(){
    this.setState({copied: true}, () => {
      setTimeout(()=> this.setState({copied: false}),1500);
    })
  }
  render() {
    const {name, background, paletteId, id, singleColorPalette, classes} = this.props;
    const {copied} = this.state;
    return (
      <CopyToClipboard
        text={background}
        onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{background}}>
          {/* separate div for aoverlay animation effect */}
          <div
            style={{background}}
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
          />
          <div className={ `${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>
              {this.props.background}
            </p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {
            !singleColorPalette &&
            <Link to={`/palette/${paletteId}/${id}`} onClick={(e)=>e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          }


        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox);
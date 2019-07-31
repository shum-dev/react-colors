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
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>
              {this.props.background}
            </p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
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
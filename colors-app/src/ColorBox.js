import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';


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
    const {name, background, paletteId, id, hideLink} = this.props;
    const {copied} = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.2;
    return (
      <CopyToClipboard
        text={background}
        onCopy={this.changeCopyState}>
        <div className='ColorBox' style={{background}}>
          {/* separate div for aoverlay animation effect */}
          <div
            style={{background}}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={!isDarkColor && 'dark-text'}>{this.props.background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarkColor && 'light-text'}>{name}</span>
            </div>
            <button className={`copy-button ${!isDarkColor && 'dark-text'}`}>Copy</button>
          </div>
          {
            !hideLink &&
            <Link to={`/palette/${paletteId}/${id}`} onClick={(e)=>e.stopPropagation()}>
              <span className={`see-more ${!isDarkColor && 'dark-text'}`}>More</span>
            </Link>
          }


        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox;
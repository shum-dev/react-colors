import chroma from 'chroma-js';
import sizes from './sizes';
export default {
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
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => props.singleColorPalette ? '40%' : '20%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: props => props.singleColorPalette ? '40%' : '10%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => props.singleColorPalette ? '10%' : '5%',
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
    height: '20vh',
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
      fontSize: '15vw',
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
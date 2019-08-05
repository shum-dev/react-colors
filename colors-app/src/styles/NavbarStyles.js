import sizes from './sizes';
export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    fontWeight: '300',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    },
    [sizes.down('xs')]: {
      display: 'none',
    }
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  slider: {
    /* border: 1px solid black; */
    width: '340px',
    padding: '5px',
    display: 'inline-block',
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-handle:hover, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginTop: '-3px'
    },
    [sizes.down('md')]: {
      width: '200px',
    },
    [sizes.down('xs')]: {
      width: '150px',
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '10px'
  }
};
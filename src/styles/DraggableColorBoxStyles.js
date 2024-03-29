import chroma from 'chroma-js';
import sizes from './sizes';
const styles = {
  root: {

    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'flex',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      color: 'white',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%'
    },

    [sizes.up('sm')]: {
      display: 'inline-block',
      marginBottom: '-5px',
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    top: '2px',
    color: props => chroma(props.color).luminance() <= 0.2 ? 'white' : 'rgba(0,0,0,0.7)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',

    [sizes.up('sm')]: {
      top: '0',
      padding: '10px',
    },
  },
  deleteIcon: {
    color: 'rgba(0,0,0,0.5)',
    transition: 'all .3s ease-out',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  }
}

export default styles;
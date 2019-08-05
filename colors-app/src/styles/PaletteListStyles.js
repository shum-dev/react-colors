import sizes from './sizes';
import bg from './Dalmatian-Spots.svg'
export default {
  root: {
    backgroundColor: '#fff',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll'
  },
  container: {
    position: 'relative',
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    border: '1px solid black',
    [sizes.down('xl')]: {
      width: '60%'
    },
    [sizes.down('sm')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    color: 'white',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      color: 'white',
    }
  },
  palettes: {
    top: '70px',
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 47.3%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1rem',
    }
  },
  heading: {
    fontSize: '2rem'
  }
};
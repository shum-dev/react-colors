import sizes from './sizes';
import bg from './Dalmatian-Spots_2.svg'
export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    },
  },
  root: {
    backgroundColor: '#fff',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll'
  },
  container: {
    position: 'relative',
    height: '100vh',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
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
      color: 'black',

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
    color: '#494747',
    fontSize: '2rem'
  }
};
import sizes from './sizes';
import bg from './Dalmatian-Spots_3.svg'
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
    minHeight: '100dvh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll'
  },
  container: {
    position: 'relative',
    minHeight: '100vh',
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
      width: '90%'
    }
  },
  nav: {
    color: 'white',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h1': {
      margin: '0',
      fontSize: '1.5rem',
    },
    '& a': {
      display: 'flex',
      color: '#F7873F',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        marginLeft: '5px',
        transition: "all .2s ease-in",
      },
    '&:hover svg': {
      transform: 'scale(1.3)'
    },
    },
    [sizes.up('xs')]: {
      marginTop: '1.5rem',
    },
    [sizes.down('xs')]: {
      width: '90%',
    }
  },
  palettes: {
    top: '70px',
    position: 'absolute',
    boxSizing: 'border-box',
    paddingBottom: '4rem',
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
    background: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontSize: '2rem'
  }
};
export default {
  root: {
    boxSizing: 'border-box',
    height: '200px',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: '1'
    },
  },
  colors: {
    backgroundColor: 'black',
    height: '80%',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px'
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: '10px',
    zIndex: '2',
    opacity: '0',
  }
}
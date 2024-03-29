import sizes from './sizes';
import { DRAWER_WIDTH } from '../constants';
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  navTitle: {
    display: 'flex',
    flexGrow: '1',

    '& h6': {
      flexGrow: '1',
      width: '0',
      overflow: 'hidden',
      textOverflow: 'elipsis',
      whiteSpace: 'nowrap',
    }
  },
  menuButton: {
  },
  hide: {
    display: 'none',
  },
  navBtns: {
    display: 'flex',
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none'
    },
    [sizes.down('xs')]: {
      marginRight: '0.5rem'
    }
  },
  button: {
    margin: '0 0.5rem',
    [sizes.down('xs')]: {
      margin: '0 0.2rem',
      padding: '0.2rem'
    }
  },
});

export default styles;
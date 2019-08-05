import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: ''
    }
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  };
  openDialog = (id) => {
    this.setState({ openDeleteDialog: true, deletingId: id });
  };
  closeDialog = () => {
    this.setState({ openDeleteDialog: false, deletingId: '' });
  };
  handleDelete = (e) => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  render() {
    const { palettes, classes } = this.props;
    return(
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
            <TransitionGroup className={classes.palettes}>
              {palettes.map(item => (
                <CSSTransition key={item.id} classNames='fade' timeout={500}>
                  <MiniPalette
                    key={item.id}
                    {...item}
                    handleClick={() => this.goToPalette(item.id)}
                    // handleDelete={deletePalette}
                    openDialog={this.openDialog}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
        </div>
        <Dialog
          open={this.state.openDeleteDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClose={this.closeDialog}
        >
          <DialogTitle >Delete This Palette?</DialogTitle>
          <DialogActions>
            <Button onClick={this.closeDialog} color="default">
              <CloseIcon/> Disagree
            </Button>
            <Button onClick={this.handleDelete} color="secondary">
              <CheckIcon/>Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
export default withStyles(styles)(PaletteList);
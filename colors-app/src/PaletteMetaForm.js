import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';


class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'form',
      newPaletteName: ''
    };
  }
  componentDidMount(){
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => (
      this.props.palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    ));
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  showEmojiPicker = () => {
    this.setState({stage: 'emoji'});
  };
  savePalette = (emoji) => {
    this.props.handleSubmit(this.state.newPaletteName, emoji.native)
  };
  render() {
    const { newPaletteName, open, stage } = this.state;
    const { handleSubmit, hideForm } = this.props;
    return (
      <div>
        <Dialog
          open={stage === 'emoji'}
          onClose={hideForm}
        >
          <DialogTitle id='form-dialog-title'>Pick a Palette Emoji</DialogTitle>
          <Picker onSelect={this.savePalette}/>
        </Dialog>
        <Dialog
          open={stage === 'form'}
          onClose={hideForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette.
              </DialogContentText>

              <TextValidator
                name='newPaletteName'
                label='Palette Name'
                value={newPaletteName}
                fullWidth
                autoFocus
                onChange={this.handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Palette name is required', 'Palette name must be unique']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color='primary'>
                Cancel
              </Button>
              <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                  >
                      Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;


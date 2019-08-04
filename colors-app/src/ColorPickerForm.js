import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'gray',
      newColorName: ''
    }
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => (
      this.props.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    ));
    ValidatorForm.addValidationRule('isColorUnique', (value) => (
      this.props.colors.every(
        ({color}) => color !== this.state.currentColor
      )
    ));
  };
  updateCurrentColor = (newColor) => {
    const color = newColor.rgb;
    this.setState({currentColor: `rgba(${color.r},${color.g},${color.b},${color.a})`});
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({newColorName: ''})
  }
  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return(
      <div>
         <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
            className={classes.picker}
          />
          <ValidatorForm onSubmit={this.handleSubmit}>
            <TextValidator
              className={classes.colorNameInput}
              name='newColorName'
              placeholder='Color Name'
              variant='filled'
              margin='normal'
              value={newColorName}
              onChange={this.handleChange}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['Color name is required', 'Color name must be unique', 'Color already used!']}
            />
            <Button
              className={classes.addColor}
              type='submit'
              variant='contained'
              color='primary'
              style={{backgroundColor: currentColor}}
              disabled={paletteIsFull}
            >
              {paletteIsFull ? 'palette full' : 'Add Color'}

            </Button>
          </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm);
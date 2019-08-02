import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    const aimPalette = this.state.palettes.find(palette => palette.id === id);
    const extendedPalette = generatePalette(aimPalette);
    return extendedPalette;
  }
  savePalette(newPalette) {
    this.setState({palettes: [...this.state.palettes, newPalette]});
  }

  render(){
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => <PaletteList {...routeProps} palettes={this.state.palettes}/>}
        />
        <Route
          exact
          path='/palette/new'
          render={(routProps) => (
            <NewPaletteForm
              {...routProps}
              savePalette={this.savePalette}
              palettes={this.state.palettes}
            />)
          }
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => <Palette palette={this.findPalette(routeProps.match.params.id)}/>}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(routeProps)=> (
            <SingleColorPalette
              palette={this.findPalette(routeProps.match.params.paletteId)}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
        <Route render={() => <h1>NOT FOUND</h1>}/>
      </Switch>
    );
  }

}

export default App;

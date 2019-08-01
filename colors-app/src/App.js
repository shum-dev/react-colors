import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
  findPalette(id) {
    const aimPalette = seedColors.find(palette => palette.id === id);
    const extendedPalette = generatePalette(aimPalette);
    return extendedPalette;
  }
  render(){
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => <PaletteList {...routeProps} palettes={seedColors}/>}
        />
        <Route
          exact
          path='/palette/new'
          render={() => <NewPaletteForm/>}
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

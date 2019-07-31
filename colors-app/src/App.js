import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
  findPalette(routeProps) {
    const aimPalette = seedColors.find(palette => palette.id === routeProps.match.params.id);
    const extendedPalette = generatePalette(aimPalette)
    return <Palette palette={extendedPalette}/>
  }
  render(){
    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList {...routeProps} palettes={seedColors}/>}/>
        <Route exact path='/palette/:id' render={this.findPalette}/>
        <Route exact path='/palette/:paletteId/:colorId' render={()=> <SingleColorPalette/>}/>
        <Route render={() => <h1>NOT FOUND</h1>}/>
      </Switch>
    );
  }

}

export default App;

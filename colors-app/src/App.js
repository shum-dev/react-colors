import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  findPalette(routeProps) {
    const aimPalette = seedColors.find(palette => palette.id === routeProps.match.params.id);
    const extendedPalette = generatePalette(aimPalette)
    return <Palette palette={extendedPalette}/>
  }
  render(){
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette List Goes Here</h1>}/>
        <Route exact path='/palette/:id' render={this.findPalette}/>
        <Route render={() => <h1>NOT FOUND</h1>}/>
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    );
  }

}

export default App;

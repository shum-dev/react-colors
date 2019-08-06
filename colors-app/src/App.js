import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes')) || seedColors;
    this.state = {
      palettes: savedPalettes
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  };
  findPalette(id) {
    const aimPalette = this.state.palettes.find(palette => palette.id === id);
    const extendedPalette = generatePalette(aimPalette);
    return extendedPalette;
  };
  deletePalette(id) {
    this.setState((prevState) => ({
      palettes: prevState.palettes.filter(item => item.id !== id)
    }), this.syncLocalStorage);

  }
  savePalette(newPalette) {
    this.setState({palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage);
  };
  syncLocalStorage = () => {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  };
  render(){
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/'
                render={(routeProps) => (
                  <div className="page">
                    <PaletteList
                      {...routeProps}
                      palettes={this.state.palettes}
                      deletePalette={this.deletePalette}
                    />
                  </div>
                    )}
              />
              <Route
                exact
                path='/palette/new'
                render={(routProps) => (
                  <div className="page">
                    <NewPaletteForm
                      {...routProps}
                      savePalette={this.savePalette}
                      palettes={this.state.palettes}
                    />
                  </div>
                  )}
              />
              <Route
                exact
                path='/palette/:id'
                render={(routeProps) => (
                  <div className="page">
                    <Palette
                      palette={this.findPalette(routeProps.match.params.id)}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={(routeProps)=> (
                  <div className="page">
                  <SingleColorPalette
                    palette={this.findPalette(routeProps.match.params.paletteId)}
                    colorId={routeProps.match.params.colorId}
                  />
                  </div>
                )}
              />
              <Route render={() => <h1>NOT FOUND</h1>}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>

    );
  }

}

export default App;

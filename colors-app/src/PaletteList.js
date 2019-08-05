import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes, deletePalette} = this.props;
    return(
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Palette List</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(item => (
              <MiniPalette
                key={item.id}
                {...item}
                handleClick={() => this.goToPalette(item.id)}
                handleDelete={deletePalette}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(PaletteList);
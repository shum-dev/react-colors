import React from 'react';

function PaletteFooter ({emoji, paletteName}) {
  return (
    <footer className='Palette-footer'>
      {paletteName}
      <span className='emoji'>{emoji}</span>
    </footer>
  )
}
export default PaletteFooter;
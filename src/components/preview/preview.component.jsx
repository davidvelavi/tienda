import React from 'react';
import './preview.styles.scss';


const Preview = ( {name, imageUrl, price} )=>(
  <div className="Preview">
    <div
      className="Preview-Image"
      style={
        {backgroundImage:`url(${imageUrl})`}
      }
    />
    <div className="Preview-Footer">
      <span className="Preview-Name"> { name }</span>
      <span className="Preview-Price"> { price }</span>
    </div>
  </div>

);

export default Preview;
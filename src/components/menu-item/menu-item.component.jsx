import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, size , imageUrl})=>(
  <div className={`MenuItem ${size}`}>
    <div className="MenuItem-BackgroundImage"
    style={
      { backgroundImage : `url(${imageUrl})`}
    }
    />
    <div className="MenuItem-Content">
      <h1 className="MenuItem-Title">
        {title.toUpperCase()}
      </h1>
      <span className="MenuItem-Subtitle"> Shop Now  </span>
    </div>
  </div>
);

export default MenuItem;
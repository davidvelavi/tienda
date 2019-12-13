import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const buildUrl = (urlBase, link)=>{
  return `${urlBase}${link}`
}
const MenuItem = ({title, size , imageUrl, linkUrl,  match, history})=>(
  <div className={`MenuItem ${size}`} onClick={()=>{ history.push( buildUrl(match.url, linkUrl))}}>
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

export default withRouter(MenuItem);
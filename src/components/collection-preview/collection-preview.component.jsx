import React from 'react';
import './collection-preview.styles.scss';
import Preview from '../preview/preview.component';

const CollectionPreview = ({title, routName , items:preview }) => (
  <div className="CollectionPreview">
    <h1 className="CollectionPreview-Title"> {title.toUpperCase()} </h1> 
    <div className="CollectionPreview-Preview">
      {
        preview.filter( (preview, idx ) => idx < 4)
        .map(({id, ...otherPreviewProps}) => (
          <Preview key={id} {...otherPreviewProps}  />
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;
import React from 'react';
import './shoppage.styles.scss';
import {SHOP_DATA} from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      collection : SHOP_DATA
    }
  }
  render(){
    return (
      <div className="Shop">
        {
          this.state.collection.map( ({id, ...otherCollectionProps})=> (
            <CollectionPreview key={id} {...otherCollectionProps}  />
          ))
        }
      </div>
    );
  }

}

export default ShopPage;
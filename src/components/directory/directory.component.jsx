import React from 'react';
import './directory.styles.scss';
import {SECTIONS_DATA} from './sections.data';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sections : SECTIONS_DATA
    };
  }

  render(){
    return (
      <div className="Directory">
        {
          this.state.sections.map( ({id, ...otherParams }) => (
            <MenuItem key={id} {...otherParams}/>
          ) )
        }
      </div>
    );
  }
}

export default Directory;
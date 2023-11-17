import React from "react";
import './search-panel';

const SearchPanel = () => {

    const searchStyle = {
        fontSize: '20px'
      }
      
      const placeHolderText = 'Type search text here'

    return (
  <input
  placeholder={ placeHolderText }
  style={ searchStyle } />
    );
  };

  export default SearchPanel
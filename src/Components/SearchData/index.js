// import {useState} from 'react'
// import allFiles from '../json_data/merged_file.json';



// const Search_data = () => {
//   const [searchTerm, setSearchTerm] = useState('');
 

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFormSubmit = async(e) => {
//     e.preventDefault();

  
    
//     console.log(allFiles)
//     console.log('Search term:', searchTerm);
//     setSearchTerm('');
//   };


      
//   return (
//     <div>
//     <form className="search-bar" onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Search</button>
//     </form>
   
//     </div>
//   );
//   }
// export default Search_data;

import React, { useState, useEffect } from 'react';
import mergeData from '../../json_data/total.json';
import Displaytable from '../Displaytable';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    // Perform initial search on component mount
    performSearch(searchTerm);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    performSearch(searchTerm);
  };

  const performSearch = (term) => {
    // Perform search on the imported JSON data
    const results = mergeData.filter((item) => {
      if(item.hasOwnProperty("thermostatPacket")){
        console.log('hello')
        const itemString = JSON.stringify(item).toLowerCase();
        return itemString.includes(term.toLowerCase());
}
    });
    console.log(results)
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
     
        <table className="custom-table">
        <thead> 
          <tr>
            <th>date</th>
            <th>time</th>
            <th>product</th>
            <th>version</th>
            <th>id</th>
          </tr>
        </thead>
        {searchResults.map((item,index) => 

        
        <Displaytable data={item}/>
        
        )}
                </table>


    </div>
  );
};

export default SearchComponent;






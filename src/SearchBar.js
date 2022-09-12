import React, {useState, useEffect} from "react";
import './SearchBar.css';

function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm])

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div className="search-container">
      <input className='search-bar' type='text' name='filter' onChange={handleChange} value={searchTerm} placeholder="Type to search..."/>
    </div>
  );
}

export default SearchBar;

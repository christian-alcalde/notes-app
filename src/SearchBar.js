import React, {useState, useEffect} from "react";

function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm])

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <input type='text' name='filter' onChange={handleChange} value={searchTerm} placeholder="Type to search..."/>
  );
}

export default SearchBar;

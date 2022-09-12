import React, {useState, useEffect} from "react";
import Note from './Note';
import NewNote from './NewNote';

function NotesList({list, submitHandler, filteredString, onDelete}) {
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    setFilteredList(list.filter(note => note.message.includes(filteredString.toLowerCase())));
  }, [list, filteredString])

  return (
    <div>
      <ul>
        {filteredList.map(note => <Note key={note.id} note={note} onDelete={onDelete}/>)}
      </ul>
        <NewNote submitHandler={submitHandler}/>
    </div>
  );
}

export default NotesList;

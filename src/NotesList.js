import React, {useState, useEffect} from "react";
import Note from './Note';
import NewNote from './NewNote';

function NotesList({list, submitHandler, filteredString}) {
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    setFilteredList(list.filter(note => note.message.includes(filteredString.toLowerCase())));
  }, [list, filteredString])

  return (
    <div>
      <ul>
        {filteredList.map(note => <Note text={note.message} date={note.date}/>)}
      </ul>
        <NewNote submitHandler={submitHandler}/>
    </div>
  );
}

export default NotesList;

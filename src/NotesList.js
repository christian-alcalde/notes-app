import React from "react";
import Note from './Note';
import NewNote from './NewNote';

function NotesList({list, submitHandler}) {
  return (
    <div>
      {list.map(note => <Note text={note.message} date={note.date}/>)}
      <NewNote submitHandler={submitHandler}/>
    </div>
  );
}

export default NotesList;

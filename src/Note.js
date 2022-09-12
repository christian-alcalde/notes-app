import React from "react";
import './Note.css';

function Note({note, onDelete}) {
  function handleDelete() {
    onDelete(note.id);
  }

  return (
    <li className='note-container' onClick={handleDelete}>
      <p>{note.message}</p>
      <p><em>- {note.date}</em></p>
    </li>
  );
}

export default Note;

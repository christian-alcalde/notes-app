import React from "react";

function Note({note, onDelete}) {
  function handleDelete() {
    onDelete(note.id);
  }

  return (
    <li onClick={handleDelete}>
      <p>{note.message}</p>
      <p><em>- {note.date}</em></p>
    </li>
  );
}

export default Note;

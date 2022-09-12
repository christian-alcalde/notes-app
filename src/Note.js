import React from "react";

function Note({text, date}) {
  return (
    <li>
      <p>{text}</p>
      <p><em>- {date}</em></p>
    </li>
  );
}

export default Note;

import React from "react";

function Note({text, date}) {
  return (
    <div>
      <p>{text}</p>
      <p><em>- {date}</em></p>
    </div>
  );
}

export default Note;

import React, {useState} from "react";

function NewNote({submitHandler}) {
  const [messageText, setMessageText] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    const date = new Date();
    let note = {message: messageText, date: date.toUTCString()};
    setMessageText('')
    submitHandler(note);
  }

  function handleChange(evt) {
    setMessageText(evt.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' id='message' maxlength='200' value={messageText} onChange={handleChange}/>
        <label htmlFor="message">Characters Remaining: {200-messageText.length}</label>
        <button>Save</button>
      </form>
    </div>
  );
}

export default NewNote;
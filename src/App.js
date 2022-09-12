import React, {useState} from "react";
import SearchBar from './SearchBar';
import NotesList from './NotesList';

const NOTES = [
  {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Tristique senectus et netus et.',
  date: 'Mon, 12 Sep 2022 02:56:09 GMT'},
  {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Tristique senectus et netus et.',
  date: 'Tue, 13 Sep 2022 02:56:09 GMT'},
  {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Tristique senectus et netus et.',
  date: 'Wed, 14 Sep 2022 02:56:09 GMT'},
  {message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Tristique senectus et netus et.',
  date: 'Thu, 15 Sep 2022 02:56:09 GMT'}
]

const App = () => {
  const [notes, setNotes] = useState(NOTES);

  function addNoteHandler(note) {
    setNotes([note, ...notes]);
  }

  return (
    <div>
      <h1>Notes</h1>
      <SearchBar/>
      <NotesList list={notes} submitHandler={addNoteHandler}/>
    </div>
  )
}

export default App;

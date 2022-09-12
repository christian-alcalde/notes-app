import React, {useState} from "react";
import SearchBar from './SearchBar';
import NotesList from './NotesList';

const NOTES = [
  {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Tristique senectus et netus et.',
  date: 'Mon, 12 Sep 2022 02:56:09 GMT'},
  {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Tristique senectus et netus et.',
  date: 'Tue, 13 Sep 2022 02:56:09 GMT'},
  {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Tristique senectus et netus et.',
  date: 'Wed, 14 Sep 2022 02:56:09 GMT'},
  {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Tristique senectus et netus et.',
  date: 'Thu, 15 Sep 2022 02:56:09 GMT'}
]

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [filteredString, setFilteredString] = useState('');

  function noteFilter(searchTerm) {
    setFilteredString(searchTerm);
  }

  function addNoteHandler(note) {
    setNotes([note, ...notes]);
  }

  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div>
      <h1>Notes</h1>
      <SearchBar onSearch={noteFilter}/>
      <NotesList list={notes} submitHandler={addNoteHandler} filteredString={filteredString} onDelete={deleteNote}/>
    </div>
  )
}

export default App;

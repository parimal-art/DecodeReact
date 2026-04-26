import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [notes, setNotes] = useLocalStorage("notes", []);

  const addNote = (text) => {
    setNotes([...notes, text]);
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Notes App</h1>

      <NoteInput addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
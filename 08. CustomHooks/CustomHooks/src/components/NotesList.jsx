export default function NotesList({ notes, deleteNote }) {
  if (notes.length === 0) return <p>No notes yet</p>;

  return (
    <div className="grid gap-3 mt-4">
      {notes.map((note, index) => (
        <div key={index} className="p-3 border rounded flex justify-between">
          <span>{note}</span>
          <button
            onClick={() => deleteNote(index)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default function NoteInput({ addNote }) {
  const handleAdd = (e) => {
    e.preventDefault();
    const text = e.target.note.value.trim();

    if (!text) return;

    addNote(text);
    e.target.reset();
  };

  return (
    <form onSubmit={handleAdd} className="flex gap-2">
      <input
        name="note"
        placeholder="Write a note..."
        className="flex-1 p-2 border rounded"
      />
      <button className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}
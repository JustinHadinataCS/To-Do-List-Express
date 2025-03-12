import { useState } from "react";

function Item({ name, onItems, id, items, onName }) {
  const [isEdit, setIsEdit] = useState(false);
  const [theUpdate, setTheUpdate] = useState("");

  function handleDelete() {
    onItems(items.filter((item) => item.id !== id));
    setTheUpdate("");
    onName("");
  }

  function handleEdit(e) {
    e.preventDefault();
    onItems(
      items.map((item) =>
        item.id === id ? { ...item, name: theUpdate } : item
      )
    );
    setTheUpdate("");
    onName("");
    setIsEdit(false);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition duration-200">
      <p className="font-medium text-gray-800 mb-3">{name}</p>
      <div>
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={() => setIsEdit(true)}
            className="text-blue-500 hover:text-blue-700 font-medium text-sm"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
            aria-label="Delete item"
          >
            ❌
          </button>
        </div>

        {isEdit && (
          <form
            onSubmit={handleEdit}
            className="mt-3 p-3 bg-gray-50 rounded border border-gray-200"
          >
            <p className="text-sm font-medium mb-2">Edit task:</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Update task..."
                className="flex-grow p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                onChange={(e) => setTheUpdate(e.target.value)}
                value={theUpdate}
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded text-sm transition duration-200"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Item;

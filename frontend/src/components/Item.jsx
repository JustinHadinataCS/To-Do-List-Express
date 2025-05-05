import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash, Edit, Check, X } from "lucide-react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/todos";

function Item({ item, setItems, items }) {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedName, setUpdatedName] = useState(item.name);

  const handleDelete = async () => {
    await axios.delete(`${BASE_URL}/${item.id}`);
    setItems(items.filter((i) => i.id !== item.id));
  };

  const handleCheckbox = async () => {
    const res = await axios.put(`${BASE_URL}/${item.id}`, {
      completed: !item.isDone,
    });
    setItems(
      items.map((i) =>
        i.id === item.id ? { ...i, isDone: res.data.completed } : i
      )
    );
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${BASE_URL}/${item.id}`, {
      title: updatedName,
    });
    setItems(
      items.map((i) => (i.id === item.id ? { ...i, name: res.data.title } : i))
    );
    setIsEdit(false);
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={item.isDone}
              onCheckedChange={handleCheckbox}
              id={`task-${item.id}`}
            />
            <label
              htmlFor={`task-${item.id}`}
              className={`font-medium ${
                item.isDone ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {item.name}
            </label>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={handleDelete}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-500">
            {item.isDone ? "Completed" : "Pending"}
          </div>
          {!isEdit && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsEdit(true);
              }}
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
            >
              <Edit className="h-4 w-4 mr-1" /> Edit
            </Button>
          )}
        </div>

        {isEdit && (
          <form
            className="mt-3 p-3 bg-gray-50 rounded border border-gray-200"
            onSubmit={handleEditSubmit}
          >
            <p className="text-sm font-medium mb-2">Edit task:</p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Update task..."
                className="flex-grow text-sm"
                onChange={(e) => setUpdatedName(e.target.value)}
                value={updatedName}
              />
              <div className="flex gap-1">
                <Button
                  type="submit"
                  size="sm"
                  className="bg-green-500 hover:bg-green-600"
                >
                  <Check className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEdit(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

export default Item;

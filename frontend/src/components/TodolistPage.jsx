import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash, RefreshCw } from "lucide-react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BASE_URL = "http://localhost:3000/todos";

function TodolistPage() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  // Get all todos
  const fetchTodos = async () => {
    try {
      const res = await axios.get(BASE_URL);
      const formatted = res.data.map((todo) => ({
        id: todo.id,
        name: todo.title,
        isDone: todo.completed,
      }));
      setItems(formatted);
    } catch (err) {
      console.error("Failed to fetch todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add new todo
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const res = await axios.post(BASE_URL, { title: name });
      setItems((prev) => [
        ...prev,
        { id: res.data.id, name: res.data.title, isDone: res.data.completed },
      ]);
      setName("");
    } catch (err) {
      console.error("Failed to add todo:", err);
    }
  };

  // Delete all
  const handleDeleteAll = async () => {
    for (let item of items) {
      await axios.delete(`${BASE_URL}/${item.id}`);
    }
    setItems([]);
  };

  // Reset all (mark all as not done)
  const handleResetAll = async () => {
    const updated = await Promise.all(
      items.map(async (item) => {
        const res = await axios.put(`${BASE_URL}/${item.id}`, {
          completed: false,
        });
        return {
          ...item,
          isDone: res.data.completed,
        };
      })
    );
    setItems(updated);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/">
        <Button variant="ghost" className="flex items-center text-gray-500">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back
        </Button>
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Taskmaster</h1>
        <p className="text-gray-600 mb-4">Justin Hadinata - 2702298236</p>

        <form className="flex gap-2 mb-4" onSubmit={handleAdd}>
          <Input
            type="text"
            placeholder="Add new task..."
            className="flex-grow"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Button type="submit">Add Task</Button>
        </form>

        <div className="flex gap-2 mb-6">
          <Button
            variant="destructive"
            className="flex items-center gap-1"
            onClick={handleDeleteAll}
          >
            <Trash className="w-4 h-4" /> Delete All
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-1"
            onClick={handleResetAll}
          >
            <RefreshCw className="w-4 h-4" /> Reset All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Item key={item.id} item={item} setItems={setItems} items={items} />
        ))}
      </div>
    </div>
  );
}

export default TodolistPage;

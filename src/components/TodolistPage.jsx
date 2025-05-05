import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash, RefreshCw } from "lucide-react";
import Item from "./Item";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Main TodoList component
function TodolistPage() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

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

        <form className="flex gap-2 mb-4">
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
          <Button variant="destructive" className="flex items-center gap-1">
            <Trash className="w-4 h-4" /> Delete All
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <RefreshCw className="w-4 h-4" /> Reset All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Item key={item.id} item={item} items={items} setItems={setItems} />
        ))}
      </div>
    </div>
  );
}

// Individual Todo Item component

export default TodolistPage;

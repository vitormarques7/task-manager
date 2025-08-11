import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 rounded-md shadow bg-slate-400 flex flex-col">
      <Input
        type="text"
        placeholder="Type the task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Type the task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // verificar se o título e a descrição estão preenchidos.
          // ".trim()" é para desconsiderar os espaços em branco.
          // se o título estiver vazioo, daí mostra o alerta.

          if (!title.trim()) {
            return alert("You have not filled in the title field.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white py-2 px-4 rounded-md font-medium"
      >
        Add task
      </button>
    </div>
  );
}

export default AddTask;

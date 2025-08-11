import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import { Routes } from "react-router";

function App(params) {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      console.log(data); // Para ver o que chega
      setTaskList(Array.isArray(data) ? data : []);
    };
    // SE QUISER, PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
    // fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = taskList.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });

    setTaskList(newTasks);
  }
  // na função abaixo, para deletar, temos que passar o taskId como parâmetro para saber qual task está sendo clicada.
  function onDeleteTaskClick(taskId) {
    const newTasks = taskList.filter((task) => task.id != taskId);
    setTaskList(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTaskList([...taskList, newTask]);
  }

  // abaixo onde renderiza tudo [este é o componente pai]:
  return (
    <div className="w-screen h-screen flex justify-center p-6 bg-slate-500">
      <div className="w-[500px] space-y-5">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>

        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          taskListProp={taskList}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

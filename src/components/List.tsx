import { useEffect, useState } from "react";
import InputText from "./InputText";
import Line from "./Line";

type Props = {
  id: number;
  text: string;
  isChecked: boolean;
};

function List() {
  const [tasks, setTasks] = useState<Props[]>([
  //   { id: 1, text: "Faire les courses", isChecked: true },
  //   { id: 2, text: "Aller à la salle de sport", isChecked: false },
  //   { id: 3, text: "Lire un livre", isChecked: false },
  //   { id: 4, text: "Faire du code React", isChecked: true },
  ]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos?limit=5')
    .then(res => res.json())
    .then(data => {
      const formattedTasks = data.todos.map((todo: {id: number; todo: string; completed: boolean}) => ({
        id: todo.id,
        text: todo.todo,
        isChecked: todo.completed,
      }));
      setTasks(formattedTasks);
    }).catch(error => console.error('Erreur de récupération des taches: ', error))
  }, []);

  const addTask = (newTask: string): void => { 
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, isChecked: false }]);
    }
  };

  const toggleTask = (taskId: number): void => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <>
      <InputText addTask={addTask}/>
      <div className="">
        <ul>
          {tasks.sort((a, b) => Number(a.isChecked) - Number(b.isChecked))
            .map(task => (
              <Line key={task.id}
                id={task.id}
                text={task.text}
                isChecked={task.isChecked} 
                toggleTask={() => toggleTask(task.id)}
              />
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
import { useState } from "react";
import TakeInput from "./components/TakeInput";
import TaskList from "./components/TaskList";
import "./index";

function App() {
  const [task, setTask] = useState([]);

  const addTask = (input) => {
    if(input !== '')
      setTask([...task, input]);
  };

  const deleteTask = (key) => {
    let newArrayItem = [...task];
    newArrayItem.splice(key, 1);
    setTask([...newArrayItem]);
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center m-5   ">
        <TakeInput addTask={addTask} />

        <h1 className="text-center text-2xl font-bold p-2 text-amber-500">
          Remaining Tasks To Done
        </h1>
        <div className="flex flex-col m-5 border border-yellow-700 ">
          {task.map((item, i) => {
            return (
              <TaskList
                key={i}
                index={i}
                tasklist={item}
                deleteItems={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

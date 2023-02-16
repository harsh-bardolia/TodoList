import { useState } from "react";
import "./index";

function App() {
  const [input, setInput] = useState("");
  // console.log(input);
  const [task, setTask] = useState([]);

  // console.log(task);

  const addTask = (input) => {
    setTask([...task, input]);
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center m-5   ">
        <div className="flex ">
          <input
            className="py-3 px-6 "
            placeholder="Enter the Task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => {
              addTask(input);
              setInput('');
            }}
            className="text-white bg-red-400 py-3 px-6"
          >
            Submit
          </button>
        </div>

        <div className="flex flex-col py-2">
          {task && (
            <div className="border b-2 px-6 py-3 rounded-lg m-5 text-white">
              {task}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const TakeInput = (props) => {
  const [input, setInput] = useState("");

  const onSubmitEnter = (e)=>{
    if(e.keyCode === 13){
      props.addTask(input);
      setInput('');
    }
  }
  return (
    <div>
      <div className="flex ">
        <input
          className="py-3 px-6  "
          placeholder="Enter the Task"
          value={input.toString()}
          onKeyDown={onSubmitEnter}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            props.addTask(input.toString());
            setInput("");
          }}
          className="text-black font-bold bg-cyan-400 py-3 px-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TakeInput;

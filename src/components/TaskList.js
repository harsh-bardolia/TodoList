import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const TaskList = (props) => {
  
  return (
    <div>
      <div className="flex w-[21rem] justify-between px-6 py-2 border border-cyan-200 m-4 rounded-md ">
        <p className="text-white font-semibold">{props.tasklist}</p>
        <TrashIcon  onClick={(e) => props.deleteItems(props.index)} className="h-6 cursor-pointer text-white hover:text-red-600 " />
      </div>
    </div>

  );
};

export default TaskList;

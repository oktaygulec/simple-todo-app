import React, { useContext } from "react";
import ToDo from "./ToDo";
import { AppContext } from "../App";

const ToDoList = () => {
  const { task } = useContext(AppContext);

  return (
    <table className="table mb-4">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {task.map((item) => {
          return (
            <ToDo
              key={item.id}
              id={item.id}
              description={item.description}
              status={item.status ? "In Progress" : "Done"}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ToDoList;

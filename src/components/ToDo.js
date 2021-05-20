import React, { useContext } from "react";
import { AppContext } from "../App";

const ToDo = (props) => {
  const { task, setTask } = useContext(AppContext);

  const handleStatus = () => {
    const taskCopy = [...task];
    const taskID = props.id - 1;

    taskCopy[taskID].status = !taskCopy[taskID].status;

    setTask(taskCopy);
  };

  const deleteTask = () => {
    const taskCopy = [...task];
    const taskID = props.id;

    const filteredTask = taskCopy
      .filter((item) => {
        return item.id !== taskID;
      })
      .filter((item) => {
        // silinen task'in altinda kalan task'lerin id degerini duzeltmek icin
        return (item.id > taskID && --item.id) || item.id < taskID;
      });

    setTask(filteredTask);
  };

  return (
    <tr className="align-middle">
      <th scope="row">{props.id}</th>
      <td className={props.status === "Done" ? "text-success" : undefined}>
        {props.description}
      </td>
      <td className={props.status === "Done" ? "text-success" : undefined}>
        {props.status}
      </td>
      <td>
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleStatus}
        >
          Finished
        </button>
        <button
          type="submit"
          className="btn btn-danger ms-1"
          onClick={deleteTask}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ToDo;

import React, { useContext, useState } from "react";
import { AppContext } from "../App";

const Header = () => {
  const { task, setTask } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    const taskCopy = [...task];
    taskCopy.push({
      id: taskCopy.length + 1,
      description: inputValue,
      status: true,
    });
    setInputValue("");
    setTask(taskCopy);
  };

  return (
    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
      <div className="col-12">
        <div className="form-outline">
          <input
            type="text"
            id="form1"
            className="form-control"
            placeholder="Add new to do!"
            value={inputValue}
            onChange={handleInput}
            onSubmit={addTask}
          />
        </div>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary" onClick={addTask}>
          Save
        </button>
      </div>
    </form>
  );
};

export default Header;

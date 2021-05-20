import React, { useState, createContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Card from "./components/Card";

export const AppContext = createContext();

const App = () => {
  const [task, setTask] = useState([]);

  return (
    <AppContext.Provider value={{ task, setTask }}>
      <Card>
        <h4 className="text-center my-3 pb-3">To Do App</h4>
        <Header />
        <ToDoList />
      </Card>
    </AppContext.Provider>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Head from "./components/Header";
import Sechead from "./components/Secondhead";
function App() {
  const [showhead, setShowhead] = useState(<Head nexthead={nexthead} />);
  function nexthead() {
    setShowhead(<Sechead addTask={addTask} prevhead={prevhead} />);
  }
  function prevhead() {
    setShowhead(<Head nexthead={nexthead} />);
  }
  const [tasks, setTasks] = useState([]);
  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowhead(<Head nexthead={nexthead} />);
  }

  return (
    <div className="w-[650px] h-[95%] max-md:w-[350px]">
      <div className="bg-[#171a2f] w-[100%] h-[30%] justify-center  flex flex-col items-center max-md:h-[50%]">
        {showhead}
      </div>
      <Main tasks={tasks} />
    </div>
  );
}
export default App;

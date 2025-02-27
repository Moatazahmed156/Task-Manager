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
    <div className="w-[650px] min-h-[95vh] rounded-xl my-5 bg-[#171b2f] max-md:w-[350px]">
      <div className="bg-[#171a2f] w-[100%] h-[27vh] justify-center rounded-xl flex flex-col items-center max-md:h-[45vh]">
        {showhead}
      </div>
      <Main tasks={tasks} />
    </div>
  );
}
export default App;

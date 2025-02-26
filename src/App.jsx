import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Head from "./components/Header";
import Sechead from "./components/Secondhead";
function App() {
  const [showhead, setShowhead] = useState(false);
  function nexthead() {
    setShowhead(true);
  }
  function prevhead() {
    setShowhead(false);
  }
  const [tasks, setTasks] = useState([]);
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
    setShowhead(false);
  }

  return (
    <div className="w-[650px] h-[95%] max-md:w-[350px]">
      <div className="bg-[#171a2f] w-[100%] h-[30%] justify-center  flex flex-col items-center max-md:h-[50%]">
        {showhead ? (
          <Sechead addTask={addTask} prevhead={prevhead} />
        ) : (
          <Head nexthead={nexthead} />
        )}
      </div>
      <Main tasks={tasks} />
    </div>
  );
}
export default App;

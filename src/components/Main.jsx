import Task from "./Task";
function Main({ tasks }) {
  return (
    <div className="w-full flex flex-col items-center h-[70%] bg-[#171b2f] drop-shadow-[0px_-50px_50px_rgba(50,50,100,0.4)] max-md:h-[50%]">
      <div className="flex w-[95%] justify-between mt-4">
        <p className="text-white font-bold">Filter by Month</p>
        <select className="rounded-xl py-1 px-6 h-[30px] font-bold">
          <option value="All"> All </option>
        </select>
      </div>
      <div className="mt-4 w-[95%] flex flex-col items-center" id="Tasks">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              day={task.day}
              month={task.month}
              duration={task.duration}
            />
          ))
        ) : (
          <p className="text-white mt-4">No tasks found.</p>
        )}
      </div>
    </div>
  );
}

export default Main;

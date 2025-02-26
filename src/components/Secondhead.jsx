import { useState } from "react";

function Sechead({ addTask, prevhead }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  function Addtask() {
    if (!title || !duration || !date) {
      alert("Please fill all Inputs");
      return;
    }
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    addTask({ title, duration, day, month });
    setTitle("");
    setDuration("");
    setDate("");
  }

  return (
    <div>
      <div className="mt-6" id="secHeader">
        <form className="flex gap-10 max-md:flex-col">
          <div className="title flex flex-col">
            <label htmlFor="title" className="text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="rounded-md bg-gray-300 my-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="duration flex flex-col">
            <label htmlFor="duration" className="text-white">
              Duration (Days)
            </label>
            <input
              type="number"
              id="duration"
              className="rounded-md bg-gray-300 my-1"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="date flex flex-col">
            <label htmlFor="date" className="text-white">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="rounded-md bg-gray-300 my-1"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </form>
        <div className="buttons flex w-full justify-center gap-10 my-8">
          <button
            className="bg-[#2972ee] text-white rounded-2xl px-6 py-2"
            onClick={Addtask}
          >
            Add
          </button>
          <button
            className="bg-[#2972ee] text-white rounded-2xl px-6 py-2"
            onClick={prevhead}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sechead;

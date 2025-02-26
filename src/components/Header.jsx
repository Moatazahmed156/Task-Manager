function Head({ nexthead }) {
  return (
    <div>
      <div id="mainhead" className="flex flex-col gap-8 my-8">
        <h1 className="text-white text-4xl font-bold">To Do List</h1>
        <button
          className="bg-[#2972ee] text-white rounded-2xl px-4 py-2"
          onClick={nexthead}
        >
          Add New Task
        </button>
      </div>
    </div>
  );
}

export default Head;

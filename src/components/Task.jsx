function Task({ day, month, title, duration }) {
  let year = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="h-[60px] w-[100%] bg-gray-300 rounded-lg  flex m-2 justify-around items-center drop-shadow-2xl">
      <div className="date w-[50px] h-[50px] border border-white flex flex-col items-center justify-center text-white text-sm font-bold rounded-xl mx-2 bg-[#6194ec]">
        <p className="m-0 ">{day}</p>
        <p className="m-0">{year[month - 1]}</p>
      </div>
      <div className="title w-[65%] text-gray-500 font-bold">
        <h1>{title}</h1>
      </div>
      <div className="duration w-[90px] h-[35px] flex flex-col items-center border border-white justify-center text-white font-bold rounded-xl mx-2 bg-[#6194ec]">
        <p>
          {duration} {duration > 1 ? "Days" : "Day"}
        </p>
      </div>
    </div>
  );
}
export default Task;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full bg-[#010C0E]/80 p-4 border-b-2 border-b-[#029DBB] text-[#86C8D5]">
      <div className=" w-full md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-row justify-start items-center">
			<img src="images/logo.png" className="w-32 h-16" alt="" />
          <h1 className=" text-lg md:text-2xl italic tracking-widest ">
            NASA Mission Control
          </h1>
        </div>
        <ul className="w-full md:w-[60%] flex flex-col md:flex-row justify-evenly items-center gap-3">
          <Link className=" text-xl tracking-widest" to="/">
            Launch
          </Link>
          <Link className=" text-xl tracking-widest" to="/upcoming">
            Upcoming
          </Link>
          <Link className=" text-xl tracking-widest" to="/history">
            History
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

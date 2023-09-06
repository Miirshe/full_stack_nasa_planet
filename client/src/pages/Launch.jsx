export const Launch = () => {
  return (
    <div className="w-full">
      <div className=" flex flex-col justify-start items-start gap-3 space-y-4 w-[95%] md:w-[75%] mx-auto mt-20 bg-[#010C0E]/80 p-4 border-2 border-[#029DBB] text-[#86C8D5]">
        <p className="text-xl tracking-widest">
          Schedule a mission launch for interstellar travel to one of the Kepler
          Exoplanets.
        </p>
        <p className="text-xl tracking-widest">
          Only confirmed planets matching the following criteria are available
          for the earliest scheduled missions:
        </p>
        <ul className=" list-disc space-y-3">
          <li className="text-lg ml-14 tracking-widest">
            Planetary radius 1.6 times Earth`s radius
          </li>
          <li className="text-lg ml-14 tracking-widest">
            Effective stellar flux 0.36 times Earth`s value and 1.11 times
            Earth`s value
          </li>
        </ul>
        <form>
          <div className="grid grid-cols-2 justify-start items-start gap-3">
            <div className="flex flex-col justify-start items-start space-y-4">
              <p className=" text-xl font-medium tracking-wide">Launch Date</p>
              <p className=" text-xl font-medium tracking-wide">Mission Name</p>
              <p className=" text-xl font-medium tracking-wide">Rocket Type</p>
              <p className=" text-xl font-medium tracking-wide">
                Destination Exoplanet
              </p>
            </div>
            <div className="flex flex-col justify-start items-start space-y-3">
              <input type="date" className="p-1 w-[70%] rounded" />
              <input type="text" className="p-1 w-[70%] rounded" />
              <input type="text" className="p-1 w-[70%] rounded" />
              <select name="" id="" className="p-1 w-[70%] rounded">
                <option value=""></option>
              </select>
            </div>
          </div>
          <button
            className=" border-2 mt-5 border-[#058705] bg-[#091B08]/60 p-2 w-[50%]
			 rounded"
          >
            Launch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Launch;

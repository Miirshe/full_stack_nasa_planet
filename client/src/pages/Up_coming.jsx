const Up_coming = () => {
  return (
    <div className="w-full">
      <div className=" flex flex-col justify-start items-start gap-3 space-y-4 w-[95%] md:w-[75%] mx-auto mt-20 bg-[#010C0E]/80 p-3 md:p-8 border-2 border-[#029DBB] text-[#86C8D5]">
        <p className=" text-xl font-medium tracking-widest">
          Upcoming missions including both SpaceX launches and newly scheduled
          Zero to Mastery rockets
        </p>
        <p className=" w-full text-xl font-medium tracking-widest">
          Warning! Clicking on the ✖ aborts the mission.
        </p>
        <table className="w-full border-b-2 border-b-[#04424F] space-y-2 p-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Mission</th>
              <th>Rocket</th>
              <th>Customer</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Up_coming;

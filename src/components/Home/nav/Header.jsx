import React, { useEffect, useState } from "react";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );

  return (
    <div className=" flex text-center justify-center flex-col items-center py-5 max-w-[1200px] mx-auto">
      <img className="w-2/4" src="logo.png" alt="" />
      <p className="text-md font-normal text-[#706F6F] my-5">
        Journalism Without Fear or Favour
      </p>

      <p>{formattedDate}</p>

   
       
    </div>
  );
};

export default Header;

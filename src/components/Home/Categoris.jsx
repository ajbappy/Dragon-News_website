import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categoris = ({ selectedCatagoryId, handelCatagoryChange }) => {
  const [catagorys, setCatagorys] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCatagorys(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <h1 className="text-black text-md font-semibold">All Caterogy</h1>
      <div>
        {catagorys.map((category) => (
          <li
            key={category.id}
            onClick={() => handelCatagoryChange(category.id)}
            className={`list-none px-3 m-3 cursor-pointer ${
              selectedCatagoryId === category.id ? "bg-red-500 text-white" : ""
            }`}
          >
            {category.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Categoris;

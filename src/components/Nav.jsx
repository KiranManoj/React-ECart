import React, { useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, 0.4)`;
  };


  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center p-5">
      <a
        className="py-2 px-5 border border-blue-500 rounded text-blue-400"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
      <div className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link key={i} to={`/?category=${c}`} className="flex items-center mb-3">
            <span style={{backgroundColor: color()}} className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-300"></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

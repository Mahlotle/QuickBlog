import React, { useState } from "react";
import { blogCategories } from "../assets/assets";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative cursor-pointer text-gray-500 px-4 py-1 rounded-full transition-colors duration-300
                ${menu === item ? "text-white" : ""}`}
            >
              {/* Background circle only when active */}
              {menu === item && (
                <div className="absolute inset-0 -z-10 bg-primary rounded-full"></div>
              )}
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

import React, { useState } from "react";
import { blogCategories } from "../assets/assets";
import {motion} from "motion/react"

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
                <motion.div 
                  layoutId = 'underline'
                  transition = {{type: 'spring', stiffness: 350, damping: 30}}
                  className="absolute inset-0 -z-10 bg-primary rounded-full">

                </motion.div>
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

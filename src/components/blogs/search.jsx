import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // 
const search = () => {
    return (
        <div className="w-full flex justify-center mt-[10px]">
          <div className="flex border border-primary items-center w-[70%] md:w-[50%] px-2 py-1 md:py-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 md:px-3" />
            <div className="w-full">
              <input type="text" className="w-full outline-none" placeholder="Search Blogs" />
            </div>
          </div>
        </div>
      );
    };
    

export default search
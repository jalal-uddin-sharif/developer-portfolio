import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className="flex items-center justify-center my-6">
          <span class="w-24 h-[2px] bg-[#251e55]"></span>
          <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {title}
          </span>
          <span class="w-24 h-[2px] bg-[#251e55]"></span>
        </div>
    );
};

export default SectionTitle;
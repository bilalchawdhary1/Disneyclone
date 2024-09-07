// import React from 'react'

const HeaderItem = (name,Icon) => {
  return (
    <div>
      <div
        className="flex items-center px-4 cursor-pointer gap-1 text-white text-[0.938rem] cursor-pointer font-semibold hover:underline
          underline-offset-8"
      >
        <Icon className="mr-2" />
        <h2> {name}</h2>
      </div>
    </div>
  );
};

export default HeaderItem;

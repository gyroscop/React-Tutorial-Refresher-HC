import React from "react";

function Card({ userName, role, company, image }) {
  //   console.log(props);
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md mb-3">
        <img
          src={image}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{userName}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {userName} is {role}, currently working in {company}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

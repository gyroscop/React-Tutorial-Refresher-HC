import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/gyroscop")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="bg-green-600 rounded-sm text-3xl p-3 ">
      <div className="flex justify-center">
        <img
          src={data.avatar_url}
          alt="Github Profile Picture"
          width={200}
          className="rounded-full "
        />
      </div>
      Name: {data.name}
      <br />
      Location: {data.location}
      <br />
      Blog: <a href={data.blog}> {data.blog} </a>
    </div>
  );
}

export default Github;

export const gitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/gyroscop");
  return response.json();
};

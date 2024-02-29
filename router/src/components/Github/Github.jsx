import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     const gitUser = fetch("https://api.github.com/users/druxvh")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div>
      Github Followers: {data.followers} <br />
      <img src={data.avatar_url} alt="img" width={300} />
      Git Repos: {data.public_repos} <br />
      Location: {data.location} <br />
      Bio: {data.bio}
    </div>
  );
}
export default Github;

export async function gitInfoData() {
  const response = await fetch("https://api.github.com/users/druxvh");
  return response.json();
}

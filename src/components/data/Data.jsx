import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {
  const [post, setPost] = useState([]);
  post.map((element) => console.log(element.title));
  console.log(post);

  useEffect(() => {
    axios
      .get("http://ec2-18-118-23-72.us-east-2.compute.amazonaws.com:8080/bikes")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {post.map((moto) => (
        <h1 key={moto.id}>{moto.title}</h1>
      ))}
    </>
  );
};

export default Data;

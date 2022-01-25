import React, { useEffect, useState } from "react";
import "./motocicletas.css";
import mainMoto from "../../../imags/main-moto.jpg";
import axios from "axios";

export const Motocicletas = () => {
  const [post, setPost] = useState([]);

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
    <div className="motocicleta-container">
      <div className="motocicleta-container--main">
        <img src={mainMoto} alt="main-img" />
        <p className="photo-credit">Foto de Gareth Davies en Pexels</p>
      </div>
      <div className="motocicleta-container--group">
        {post.map((moto, index) => {
          return (
            <div key={index} className="aMoto">
              <h4>{moto.title}</h4>
              <img src={moto.url} alt="" />
              <p>{moto.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export default Motocicletas;

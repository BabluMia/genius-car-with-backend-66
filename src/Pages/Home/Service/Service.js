import "./Service.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, price, name, img, description } = service;
  const navigate = useNavigate();
  const navigateServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>Car Name: {name}</h2>
      <p>{price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => {
          navigateServiceDetail(id);
        }}
        className="btn btn-primary"
      >
        Book : {name}
      </button>
    </div>
  );
};

export default Service;

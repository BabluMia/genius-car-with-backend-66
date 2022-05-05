import "./Services.css";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
// import repair from '../../../img/repair.png'

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://desolate-atoll-43797.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container">
      <div className="row">
        <h1 style={{ textAlign: "center", color: "blue" }}> Our Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

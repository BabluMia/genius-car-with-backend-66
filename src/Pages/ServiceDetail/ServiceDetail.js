import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useSeviceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  // const [service,setService] = useState({})
  // useEffect(()=>{
  //     const url = `https://desolate-atoll-43797.herokuapp.com/service/${serviceId}`
  //     fetch(url)
  //     .then(res=>res.json())
  //     .then(data => setService(data))
  // },[])
  const [service] = useSeviceDetail(serviceId);
  return (
    <div className="w-75 mx-auto text-center my-4">
      <h2>Service:{service.name}</h2>
      <div className="m-4 text-center">
        <Link to={`/checkout/${serviceId}`}>
          <Button className="btn btn-primary ">Go For Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

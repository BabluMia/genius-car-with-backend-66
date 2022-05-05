import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useSeviceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useSeviceDetail(serviceId);

  const [userd, setUserd] = useState({
    address: "Mohammoad Pur",
    number: "01794706131",
  });
  const handleAddressChange = (event) => {
    const { address, ...rest } = userd;
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    setUserd(newUser);
  };

  const placeOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.number.value,
    };
    axios
      .post("https://desolate-atoll-43797.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          alert("Order Booked!!");
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Please Checkout : {service.name}.... </h2>
      <form action="" onSubmit={placeOrder}>
        <input
          className="w-100 mb-2"
          value={user?.displayName}
          autoComplete="off"
          readOnly
          type="text"
          name="name"
          placeholder="Name"
        />{" "}
        <br />
        <input
          className="w-100 mb-2"
          value={user?.email}
          type="email"
          name="email"
          placeholder="Email"
        />{" "}
        <br />
        <input
          className="w-100 mb-2"
          value={service?.name}
          readOnly
          type="text"
          name="service"
          placeholder="Service"
        />{" "}
        <br />
        <input
          className="w-100 mb-2"
          value={userd?.address}
          onChange={handleAddressChange}
          type="text"
          name="address"
          placeholder="Address"
        />{" "}
        <br />
        <input
          className="w-100 mb-2"
          required
          type="number"
          name="number"
          placeholder="number"
        />{" "}
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;

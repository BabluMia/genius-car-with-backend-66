import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://desolate-atoll-43797.herokuapp.com/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [user]);
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Your Orders : {orders?.length}</h2>
      {
        orders.map(order => <div>
          <h6>Email :{order?.email}: {order?.service}</h6>
        </div>)
      }
    </div>
  );
};

export default Order;

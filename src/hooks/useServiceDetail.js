import { useEffect, useState } from "react";

const useSeviceDetail = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://desolate-atoll-43797.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service];
};
export default useSeviceDetail;

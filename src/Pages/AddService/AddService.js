import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://desolate-atoll-43797.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service..</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
          required
        />
        <textarea
          className="my-2"
          placeholder="Description"
          {...register("description")}
          required
        />
        <input
          className="my-2"
          placeholder="Price"
          type="number"
          {...register("price")}
          required
        />
        <input
          className="my-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
          required
        />
        <input className="my-2 w-25 d-block mx-auto" type="submit" />
      </form>
    </div>
  );
};

export default AddService;

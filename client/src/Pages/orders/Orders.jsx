import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
            {/* //* Reminder : ADD Button to this */}
            {/* <Link to="/add">
            <button>Add New Gig</button>
          </Link> */}
          </div>
          <table>
            <tr>
              {/* <thead> */}
              <th> Image</th>
              <th> Title</th>
              <th> Price</th>

              <th> Contact</th>
              {/* </thead> */}
            </tr>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  <td>
                    <img className="img" src={order.img} alt="" />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  {/* <td>123</td> */}
                  <td>
                    <img className="message" src="/img/message.png" alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;

import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Sandamal",
    isSeller: true,
  };

  return (
    <div className="orders">
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
            <th> {currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th> Contact</th>
            {/* </thead> */}
          </tr>
          <tbody>
            <tr>
              <td>
                <img
                  className="img"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="img"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="img"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="img"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="img"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Gig1</td>
              <td>88</td>
              <td>123</td>
              <td>
                <img className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

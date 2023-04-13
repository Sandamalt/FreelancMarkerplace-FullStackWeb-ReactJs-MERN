import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Sandamal",
    isSeller: true,
  };

  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus, perspiciatis sunt cum aliquid commodi maiores minus omnis adipisci molestiae, tempora necessitatibus quidem pariatur nam magnam iste fugit non vel.";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
          {/* //* Reminder : ADD Button to this */}
          {/* <Link to="/add">
            <button>Add New Gig</button>
          </Link> */}
        </div>
        <table>
          <tr>
            {/* <thead> */}
            <th> Buyer</th>
            <th> Last Message</th>
            <th> Date</th>
            {/* <th> {currentUser?.isSeller ? "Buyer" : "Seller"}</th> */}
            <th> Action</th>
            {/* </thead> */}
          </tr>
          <tbody>
            <tr className="active">
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr className="active">
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>{" "}
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>{" "}
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>{" "}
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>{" "}
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>{" "}
            <tr>
              <td>John Doe</td>
              <td>
                <Link to="/message/123" className="link">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td>1 day ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;

import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import user from "../assets/user 2.png";

const ContactDetail = () => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button>Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;

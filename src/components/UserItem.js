import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <div>
        <img
          src={avatar_url}
          className="round-img"
          alt="avatar"
          style={{ width: "60px" }}
        />
      </div>
      <h3>{login}</h3>
      <button className="btn btn-dark btn-sm">
        <Link to={`user/${login}`} style={{ color: "white" }}>
          more
        </Link>
      </button>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

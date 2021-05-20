import React, { useEffect, useContext } from "react";
import "boxicons";
import Repos from "./Repos";
import Spinner from "./Spinner";
import GithubContext from "./context/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, repos, getUser, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    // location,
    // company,
    // bio,
    // blog,
    login,
    // html_url,
    followers,
    following,
    public_repos,
    // public_gists,
    created_at,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: "200px" }}
        />
        <h1>{name}</h1>
        <h3 style={{ color: "orangered" }}>{login}</h3>
        <box-icon name="calendar"></box-icon>&ensp;
        <span style={{ position: "relative", bottom: "5px" }}>
          Joined at {new Date(created_at).toDateString()}
        </span>
        <div style={jumboStyle}>
          <div className="jumbotron badge badge-light">
            <h2>{public_repos}</h2>
            <small>REPOSITORIES</small>
          </div>
          <div className="jumbotron badge badge-light">
            <h2>{followers}</h2>
            <small>FOLLOWERS</small>
          </div>
          <div className="jumbotron badge badge-light">
            <h2>{following}</h2>
            <small>FOLLOWING</small>
          </div>
        </div>
        <h1>REPOSITORIES</h1>
        <Repos repos={repos} />
      </div>
    );
  }
};

const jumboStyle = {
  margin: "20px",
  padding: "10px",
};

export default User;

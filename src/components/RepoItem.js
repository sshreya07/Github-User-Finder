import React from "react";
import "boxicons";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url}>{repo.name}</a>
      <br />
      <span style={{ position: "relative", top: "5px" }}>
        <box-icon name="star"></box-icon>{" "}
      </span>
      {repo.stargazers_count}
      &ensp;
      <span style={{ position: "relative", top: "5px" }}>
        <box-icon name="git-repo-forked"></box-icon>{" "}
      </span>
      {repo.forks_count}
    </div>
  );
};

export default RepoItem;

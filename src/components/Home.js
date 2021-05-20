import React, { Fragment, useState } from "react";
import Search from "../components/Search";
import Users from "../components/Users";

const Home = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <Fragment>
      <Search setAlert={showAlert} />
      <Users />
    </Fragment>
  );
};

export default Home;

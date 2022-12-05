import { Link } from "react-router-dom";

import style from "./error.module.css";

const classNames = require("classnames");

const Error = () => {
  return (
    <div className="sectionContainer">
      <div className={style.error}>
        <h1>Page Not Found</h1>
        <Link to="/" className={classNames("btn", style.backHome)}>
          Back home
        </Link>
      </div>
    </div>
  );
};

export default Error;

import { Link } from "react-router-dom";

import style from "../style/page.module.css";

function Error() {
  return (
    <div className={style.container}>
      <div className={style.error}>
        <h1>Page Not Found</h1>
        <Link to="/" className={`btn ${style.backHome}`}>
          Back home
        </Link>
      </div>
    </div>
  );
}

export default Error;

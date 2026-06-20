import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <Link to="/">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default NotFound;
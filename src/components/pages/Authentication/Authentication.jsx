import { Navigate, Outlet } from "react-router-dom";
const Authenticate = () => {
  const check = localStorage.getItem("token");
  console.log("Authenticating", check);

  return check ? (
    <div>
      <Outlet/>{" "}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Authenticate;
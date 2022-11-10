import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { Vortex } from "react-loader-spinner";
const PrivateRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="flex h-96 w-96 mx-auto justify-center align-middle items-center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["#26547C", "#EF476F", "#FCFCFC", "#06D6A0", "#FFD166"]}
        />
      </div>
    );
  }
  if (user && user.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoutes;

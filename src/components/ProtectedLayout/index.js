import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ProtectedLayout = ({ children }) => {
  const { isAuthenticate } = useAuth();
  const location = useLocation();

  console.log(isAuthenticate);

  if (!isAuthenticate) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

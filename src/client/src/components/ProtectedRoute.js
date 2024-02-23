import { Route, Navigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/authContext";

function ProtectedRoute({ chilldren }) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate("/", { replace: true });
    }
  }, [currentUser, navigate]);

  return chilldren;
}

export default ProtectedRoute;

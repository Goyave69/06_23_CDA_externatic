import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header";

// import { useToken } from "../context/TokenContext";

export default function Root() {
  // const { token } = useToken();
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // });
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

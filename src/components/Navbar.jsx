import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, shallowEqual } from "react-redux";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Navbar() {
  const length = useSelector((state) => state.cart.length);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/" exact style={{textDecoration: "none",color: "white"}}>HOME</Link>
        <Link to="/orders" exact style={{textDecoration: "none",color: "white"}}>ORDERS</Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ShoppingCartIcon style={{ color: "white" }} />
        <h3>{length}</h3>
      </div>
    </div>
  );
}

export default Navbar;

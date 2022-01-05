import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  if (cart.length > 0) {
    var quantity = 0;
    for (var i = 0; i < cart.length; i++) {
      quantity = quantity + cart[i].qty;
    }
  }

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
        <Link to="/" exact style={{ textDecoration: "none", color: "white" }}>
          HOME
        </Link>
        <Link
          to="/orders"
          exact
          style={{ textDecoration: "none", color: "white" }}
        >
          ORDERS
        </Link>
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
        <h3>{quantity}</h3>
      </div>
    </div>
  );
}

export default Navbar;

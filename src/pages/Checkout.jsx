import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Navbar from "../components/Navbar";

function Checkout() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar />
      {cart?.map((item) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 300,
              height: 200,
            },
          }}
        >
          <Paper
            elevation={3}
            sx={{ display: "flex", flexDirection: "column", padding: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            >
              <img src={item.image} alt={item.name} height="100" />
              <div>
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
              </div>
            </div>
          </Paper>
        </Box>
      ))}
    </div>
  );
}

export default Checkout;

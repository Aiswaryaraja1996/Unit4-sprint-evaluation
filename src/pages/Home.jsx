import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import * as actions from "../redux/Action";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Home() {
  const { products, isLoading, isError } = useSelector(
    (state) => state,
    shallowEqual
  );
  const dispatch = useDispatch();

  const getProducts = () => {
    const requestAction = actions.getProdRequest();
    dispatch(requestAction);

    return fetch(`https://product-mock-server.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => {
        const successAction = actions.getProdSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        const failureAction = actions.getProdError(res);
        dispatch(failureAction);
      });
  };

  const handleAdd = (id,name,image)=>{
      const addAction = actions.addCart({id,name,image});
      dispatch(addAction);
  }

  const handleRemove = (id)=>{
      const removeAction = actions.removeCart({id});
      dispatch(removeAction);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        {isLoading && <h4>Loading...</h4>}
        {!isLoading &&
          products?.map((item) => (
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
                sx={{ display: "flex", flexDirection: "column",padding:"1rem" }}
              >
                <div style={{ display: "flex", gap: "1rem",justifyContent: "space-between"}}>
                  <img src={item.image} alt={item.name} height="100" />
                  <div>
                    <p>{item.name}</p>
                    <p>Rs.{item.price}</p>
                    <div style={{ display: "flex" ,gap:"1rem"}}>
                      <button  onClick={()=>handleRemove(item.id)}>-</button>
                      <p style={{margin:0}}>Quantity</p>
                      <button onClick={()=>handleAdd(item.id,item.name,item.image)}>+</button>
                    </div>
                    <button >ADD TO CART</button>
                  </div>
                </div>
              </Paper>
            </Box>
          ))}
      </div>
    </div>
  );
}

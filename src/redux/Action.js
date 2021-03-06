export const actionConstants = {
  GET_PRODUCT_REQUEST: "GET_PRODUCT_REQUEST",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_FAILURE: "GET_PRODUCT_FAILURE",
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
};

export const getProdRequest = () => {
  return {
    type: actionConstants.GET_PRODUCT_REQUEST,
    payload: { isLoading: true },
  };
};

export const getProdSuccess = (products) => {
  return {
    type: actionConstants.GET_PRODUCT_SUCCESS,
    payload: { products: products },
  };
};

export const getProdError = () => {
  return {
    type: actionConstants.GET_PRODUCT_ERROR,
    payload: { isError: true },
  };
};

export const addCart = ({ id, name, image, price, qty }) => {
  return {
    type: actionConstants.ADD_CART,
    payload: { id: id, name: name, image: image, price: price, qty: qty },
  };
};

export const removeCart = ({id, qty}) => {
  return {
    type: actionConstants.REMOVE_CART,
    payload: { id: id, qty: qty },
  };
};

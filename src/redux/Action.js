export const actionConstants = {
  GET_PRODUCT_REQUEST: "GET_PRODUCT_REQUEST",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_FAILURE: "GET_PRODUCT_FAILURE",
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

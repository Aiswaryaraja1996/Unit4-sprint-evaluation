import { actionConstants } from "./Action";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case actionConstants.GET_PRODUCT_SUCCESS:
      return { ...state, products: action.payload.products, isLoading: false };
    case actionConstants.GET_PRODUCT_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
}

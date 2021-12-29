import { actionConstants } from "./Action";

const initialState = {
  products: [],
  cart: [],
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
    case actionConstants.ADD_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case actionConstants.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action?.payload.id),
      };
    default:
      return state;
  }
}

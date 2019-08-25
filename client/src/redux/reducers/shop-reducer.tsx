import { ShopActionTypes } from "../actions/actionTypes";

type initialStateTypes = {
  collections: null | object;
  isFetching: boolean;
  errorMessage: null | string;
};

const initialState: initialStateTypes = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case ShopActionTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: "something went wrong with Fetch Collection"
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        collections: action.payload
      };
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

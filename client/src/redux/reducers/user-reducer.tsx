import { SET_CURRENT_USER } from "../actions/actionTypes";

type userState = {
  currentUser: null | {} | undefined;
};

type ActionTypes = { type: string; payload?: any };

const initialState: userState = {
  currentUser: null
};

export default (state = initialState, { type, payload }: ActionTypes) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};

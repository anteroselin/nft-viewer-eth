import { OWNER_ADDRESS } from "../types";

const INITIAL_STATE = {
  owner_address: "",
};

const nftsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case OWNER_ADDRESS:
      return {
        ...state,
        owner_address: action.payload,
      };
    default:
      return state;
  }
};

export default nftsReducer;

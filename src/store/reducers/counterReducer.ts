import { Reducer } from "redux";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

type CounterAction = {
  type: "INCREMENT" | "DECREMENT" | "RESET";
};

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: initialState.count,
      };
    default:
      return state;
  }
};

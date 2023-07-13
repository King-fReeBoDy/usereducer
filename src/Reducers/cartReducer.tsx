import data from "../data";

export interface Data {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

type Action = {
  payload?: number;
  type: string;
};

const reducer = (state: Data[], action: Action) => {
  const { type, payload } = action;

  if (type === "INCREASE") {
    return state.map((item) => {
      if (item.id === payload) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }

  if (type === "DECREASE") {
    return state
      .map((item) => {
        if (item.id === payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
  }

  if (type === "REMOVE") {
    return state.filter((item) => item.id !== payload);
  }

  if (type === "CLEAR_ALL") {
    return [];
  }

  if (type === "REFRESH") {
    return data;
  }

  return state;
};

export default reducer;

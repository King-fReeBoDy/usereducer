import { Data } from "../Reducers/cartReducer";

type IDispatch = {
  type: string;
  payload?: number;
};

type TFood = {
  food: Data[];
  dispatch: (action: IDispatch) => void;
};

const Foods = ({ food, dispatch }: TFood) => {
  return (
    <>
      {food.map((item) => {
        return (
          <div className="foods-container" key={item.id}>
            <img src={item.img} alt="" className="food" />
            <div className="name-price">
              <p className="food-name">{item.name}</p>
              <p className="food-price">GHC {item.price}</p>
              <p
                className="remove-btn"
                onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
              >
                Remove
              </p>
            </div>

            <div className="quantity">
              <p
                onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
              >
                ///
              </p>
              <p>{item.quantity}</p>
              <p
                onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
              >
                ///
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Foods;

import { useReducer } from "react";
import "./App.css";
import data from "./data";
import reducer from "./Reducers/cartReducer";
import Foods from "./components/Foods";

function App() {
  const [state, dispatch] = useReducer(reducer, data);

  const totalPrice = state.reduce((acc, curr) => {
    return (acc += curr.price * curr.quantity);
  }, 0);

  return (
    <>
      <nav className="nav">
        <h3>useReducer</h3>
      </nav>

      {state.length !== 0 ? (
        <section>
          <Foods food={state} dispatch={dispatch} />
        </section>
      ) : (
        <div className="no-results">
          <h3>No results found</h3>
          <button onClick={() => dispatch({ type: "REFRESH" })}>Refresh</button>
        </div>
      )}

      {state.length !== 0 && <hr />}

      {state.length !== 0 && (
        <section className="total-price">
          <h5>Total</h5>
          <p>GHC {totalPrice}</p>
        </section>
      )}

      {state.length !== 0 && (
        <section className="btn-container">
          <button
            className="btn"
            onClick={() => dispatch({ type: "CLEAR_ALL" })}
          >
            Clear all
          </button>
        </section>
      )}
    </>
  );
}

export default App;

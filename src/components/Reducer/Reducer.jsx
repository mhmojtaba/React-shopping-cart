import { useReducer } from "react";

const initialState = 0;
// const initialState = {
//   counter1: 8,
//   counter2: 0,
// };

export const reducer = (state, action) => {
  switch (action.tye) {
    case "addOne":
      return state + action.value;
    case "addFive":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CountReducer = () => {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>count one is :{state}</h2>
        <button onClick={() => dispatch({ tye: "addOne", value: 1 })}>
          AddOne
        </button>
        <button onClick={() => dispatch({ tye: "addFive", value: 5 })}>
          AddFive
        </button>
        <button onClick={() => dispatch({ tye: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ tye: "reset" })}>Reset</button>
      </div>
      <div>
        <h2>count two is : {state2}</h2>
        <button onClick={() => dispatch2({ tye: "addOne", value: 1 })}>
          AddOne
        </button>
        <button onClick={() => dispatch2({ tye: "addFive", value: 5 })}>
          AddFive
        </button>
        <button onClick={() => dispatch2({ tye: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch2({ tye: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default CountReducer;

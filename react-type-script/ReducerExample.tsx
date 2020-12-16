import React, { useReducer } from "react";

interface Props {}

type Actions = { type: "add"; text: string } | { type: "remove"; idx: number };

interface Todo {
  complete: boolean;
  text: string;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, i) => i !== action.idx);
    default:
      return state;
  }
};

const ReducerExample = (props: Props) => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      <button onClick={() => dispatch({ type: "add", text: "+++" })}>+</button>
      <button onClick={() => dispatch({ type: "remove", idx: 3 })}>-</button>
    </div>
  );
};

export default ReducerExample;

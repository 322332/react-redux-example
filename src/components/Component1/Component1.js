import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../counterSlice";

import styles from "./styles";

export default function Component1(props) {
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(increment());
  }

  return (
    <div>
      component 1 <button onClick={incrementHandler}>arttır </button>
    </div>
  );
}

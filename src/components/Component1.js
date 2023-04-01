import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../counterSlice";

export default function Component1(props) {
  const dispatch = useDispatch();
  
  console.log("comp1")
  return (
    <div>
      component 1 <button onClick={() => dispatch(increment())}>arttır </button>
    </div>
  );
}

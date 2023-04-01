import React from "react";
import { useSelector } from "react-redux";

export default function Component2(props) {
  const counter = useSelector((state) => state.counter);
  console.log("comp2");

  return <div>{counter.val}</div>;
}

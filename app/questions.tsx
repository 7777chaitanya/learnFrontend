import React from "react";
import { Link } from "react-router";

function ListItem({ name }) {
  return (
    <li className="font-black text-sky-400">
      <Link to={`/questions/javascript/${name}`}>{name}</Link>
    </li>
  );
}

export default function Questions() {
  return (
    <>
      <h1>Questions</h1>
      <ol>
        <ListItem name="debouncing" />
        <ListItem name="throttling" />
        <ListItem name="Promise Polyfill" />
        <ListItem name="Promise.all Polyfill" />
      </ol>
    </>
  );
}

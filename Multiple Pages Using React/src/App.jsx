import React from 'react';
import { Link } from "react-router-dom";

export default function App(props) {
  return (
    <>
      <li class="propClone">
        <Link to="/page1">Page1</Link>
      </li>
      <li class="propClone">
        <Link to="/page2">Page2</Link>
      </li>
    </>
  );
}

// Log to console
console.log('Hello console')
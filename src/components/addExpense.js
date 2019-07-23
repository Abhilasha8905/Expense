import React from "react";

const List = props => (
  <td>
    {props.expenses.map(item => (
      <li>{item}</li>
    ))}
  </td>
);

export default List;

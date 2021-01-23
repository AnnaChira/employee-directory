import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Department:</strong> {props.deparment}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployees(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;

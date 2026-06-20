import React from "react";
import "./index.css";

const Overview = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="overview">
      <h1 className="data-headings">Overview</h1>
      <ul className="item-container">
        {data.map((eachmetric) => {
          return (
            <li className="eachitem" key={eachmetric.id}>
              <h1 className="values">{eachmetric.value}</h1>
              <p className="label">{eachmetric.label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Overview;

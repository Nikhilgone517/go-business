import React from "react";
import './index.css'

const ServiceSummary = (props) => {
  const { data } = props;
  return (
    <div className="overview">
        <h1 className="data-headings">Service summary</h1>
      <ul className="services-div">
        {Object.entries(data).map(([key, value]) => (
          <li className="eachserice" key={key}>
            <h1 className="activity">{key.toUpperCase()}</h1>
            <h1 className="service-val">{value}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSummary;

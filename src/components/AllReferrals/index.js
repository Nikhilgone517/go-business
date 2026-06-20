import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const AllReferrals = (props) => {
  const { data } = props;
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("desc");
  const [currPage, setCurrPage] = useState(1);
  const pagelimit = 10;
  const filteredData = data
    .filter((item) => {
      const search = searchInput.toLowerCase();
      return (
        item.name.toLowerCase().includes(search) ||
        item.serviceName.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      if (sort === "asc") {
        return new Date(a.date) - new Date(b.date);
      }
      return new Date(b.date) - new Date(a.date);
    });

  const startIndex = (currPage - 1) * pagelimit;
  const currentItems = filteredData.slice(startIndex, startIndex + pagelimit);
  const totalPages = Math.ceil(filteredData.length / pagelimit);

  return (
    <div className="overview">
      <h1 className="data-headings">All referrals</h1>
      <div className="search-sort-div">
        <div>
          <label className="activity">Search</label>
          <input
            type="text"
            className="search-input"
            placeholder="Name or service..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setCurrPage(1);
            }}
          />
        </div>
        <div>
          <label className="activity">Sort by date</label>
          <select
            className="select"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrPage(1);
            }}
          >
            <option value="desc">Newest Date</option>
            <option value="asc">Oldest Date</option>
          </select>
        </div>
      </div>
      <div className="ref-head-div">
        <h1 className="ref-head">NAME</h1>
        <h1 className="ref-head">SERVICE</h1>
        <h1 className="ref-head">DATE</h1>
        <h1 className="ref-head">PROFIT</h1>
      </div>
      <ul className="eachref-ul">
        {currentItems.map((eachData) => {
          return (
            <Link to={`referrals/${eachData.id}`}>
              <li className="eachref" key={eachData.id}>
                <h1 className="ref-candidate">{eachData.name}</h1>
                <h1 className="ref-candidate">{eachData.serviceName}</h1>
                <h1 className="ref-candidate">{eachData.date}</h1>
                <h1 className="ref-candidate">{eachData.profit}</h1>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="btns-div">
        <button
        className="prev-btn"
          disabled={currPage === 1}
          onClick={() => setCurrPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span className="page-no">
          {currPage}/{totalPages}
        </span>
        <button 
        className="nxt-btn"
          disabled={currPage === totalPages}
          onClick={() => setCurrPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllReferrals;

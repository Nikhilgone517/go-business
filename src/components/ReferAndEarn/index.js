import React from "react";
import "./index.css";

const Referral = (props) => {
  const { data } = props;
  const { link, code } = data;
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="overview">
      <h1 className="data-headings">Refer friends and earn more</h1>
      <div className="link-code-div">
        <div className="link">
          <label className="activity">YOUR REFERRAL LINK</label>
          <div className="input-copy-div">
            <input className="link-input" type="text" value={link} readOnly />
            <button className="try-btn" onClick={() => copyToClipboard(link)}>Copy</button>
          </div>
        </div>
        <div className="link code">
          <label className="activity">YOUR REFERRAL CODE</label>
          <div className="input-copy-div">
            <input className="link-input" type="text" value={code} readOnly />
            <button className="try-btn" onClick={() => copyToClipboard(code)}>Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;

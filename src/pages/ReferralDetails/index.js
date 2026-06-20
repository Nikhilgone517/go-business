import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./index.css";

const ReferralDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [referraldetails, setReferraldetails] = useState(null);

  useEffect(() => {
    const fetchReferral = async () => {
      const token = Cookies.get("jwt_token");
      const response = await fetch(
        `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      //   console.log(data);
      if (response.ok) {
        setReferraldetails(data.data.referrals[0]);
      }
    };
    fetchReferral();
  }, [id]);
  if (!referraldetails) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="main-bg ref-details">
        <h1
          className="back-link"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Back to Dashboard
        </h1>
        <div>
          <h1>Referral Details</h1>
          <p className="activity">Full information for this referral partner</p>
        </div>
        <div className="ref-card">
          <h1>
            {referraldetails.name}{" "}
            <span className="span-service-name">
              {referraldetails.serviceName}
            </span>
          </h1>
          <p className="activity">
            REFERRAL ID: <span className="span-ele">{referraldetails.id}</span>
          </p>
          <p className="activity">
            NAME: <span className="span-ele">{referraldetails.name}</span>
          </p>
          <p className="activity">
            SERVICE NAME:{" "}
            <span className="span-ele">{referraldetails.serviceName}</span>
          </p>
          <p className="activity">
            DATE: <span className="span-ele">{referraldetails.date}</span>
          </p>
          <p className="activity">
            PROFIT: <span className="span-ele">{referraldetails.profit}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ReferralDetails;

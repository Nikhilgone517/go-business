import React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import ServiceSummary from "../../components/ServiceSummary";
import ReferAndEarn from "../../components/ReferAndEarn";
import AllReferrals from "../../components/AllReferrals";
import Footer from "../../components/Footer";
import "./index.css";

const Dashboard = () => {
  const [refferalDashboardData, setRefferalDashboardData] = useState(null);
  const [metrics, setMetrics] = useState([]);
  const [referral, setReferral] = useState({});
  const [referrals, setReferrals] = useState([]);
  const [serviceSummary, setServiceSummary] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("jwt_token");
        // console.log(token);
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const url =
          "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals";
        const res = await fetch(url, options);
        const data = await res.json();
        // console.log(data);
        if (res.ok) {
          setRefferalDashboardData(data.data);
          setMetrics(data.data.metrics);
          setReferral(data.data.referral);
          setReferrals(data.data.referrals);
          setServiceSummary(data.data.serviceSummary);
        } else {
          console.log(data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
//   console.log(refferalDashboardData);
  return (
    <div className="main-bg">
      <Navbar />
      <div className="dashboard">
        <h1 style={{ fontSize: "24px", marginLeft: "6px" }}>
          Referral Dashboard
        </h1>
        <p style={{ fontSize: "14px", marginLeft: "6px" }}>
          Track your referrals, earnings and partner activity in one place
        </p>
      </div>
      <Overview data={metrics} />
      <ServiceSummary data={serviceSummary} />
      <ReferAndEarn data={referral} />
      <AllReferrals data={referrals} />
      <Footer />
    </div>
  );
};

export default Dashboard;

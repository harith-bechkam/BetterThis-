import React from "react";
import "./StatsSection.css";

const stats = [
  {
    number: "16K+",
    color: "#ff2ebf",
    label: "Business",
    desc: "Keeping projects on-track, more profitable and less-nightmarish."
  },
  {
    number: "22%",
    color: "#ff884d",
    label: "Billable utilization boost",
    desc: "That's more billable hours, fewer mystery gaps."
  },
  {
    number: "17K+",
    color: "#7b61ff",
    label: "New projects",
    desc: "Created each week (then smashed out of ballparks, probably)."
  },
  {
    number: "40M+",
    color: "#ff9edb",
    label: "Billable hours",
    desc: "Logged in 2024. That's 4,566 years of ka-chings."
  }
];

const logos = [
"../asset/image/cloudflare.png",

"../asset/image/grok.png",
"../asset/image/instagram.png",
"../asset/image/openai.png",
"../asset/image/tiktok.png",
"../asset/image/google.png",
"../asset/image/stripe.png",
"../asset/image/amazon-aws.png",
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <h2 className="stats-heading">
        Happy customers. Happier clients. And the least-stressed teams around.
      </h2>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3 className="stat-number" style={{ color: item.color }}>
              {item.number}
            </h3>
            <p className="stat-label" style={{ color: item.color }}>
              {item.label}
            </p>
            <p className="stat-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, idx) => (
            <img src={logo} alt={`logo-${idx}`} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

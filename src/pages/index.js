import React from "react";
// import mj_logo from "../images/MercuryJane-05.png";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <>
        <Layout>
            <h1 className="main-header">Jennifer Ross</h1>
            {/* <img src={mj_logo} alt="Mercury Jane Media LLC" className="logo" /> */}
            <h2 className="coming-soon">Coming soon!</h2>
        </Layout>
    </>
  );
}
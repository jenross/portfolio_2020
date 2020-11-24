import React from "react";
// import mj_logo from "../images/MercuryJane-05.png";
import Layout from "../components/Layout";
import Hero from "../components/Hero";


export default function HomePage() {
  return (
    <>
        <Layout>
            <Hero />
            {/* <img src={mj_logo} alt="Mercury Jane Media LLC" className="logo" /> */}
           
        </Layout>
    </>
  );
}
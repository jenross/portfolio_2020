import React from "react";
// import mj_logo from "../images/MercuryJane-05.png";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Focus from "../components/Focus";
import RecentWork from "../components/RecentWork";

export default function HomePage() {
  return (
    <>
      <Layout>
        <main>
          <Hero />
          <hr className="page-breakup" />
          <Focus />
          <hr className="page-breakup" />
          <RecentWork />
        </main>
      </Layout>
    </>
  );
}

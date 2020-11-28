import React from "react";
// import mj_logo from "../images/MercuryJane-05.png";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Focus from "../components/Focus";
import RecentWork from "../components/RecentWork";
import Contact from "../components/Contact";
import Instagram from "../components/Instagram";

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
          <hr className="page-breakup" />
          <Contact />
          <hr className="page-breakup" />
          <Instagram />
           <hr className="page-breakup" />
        </main>
      </Layout>
    </>
  );
}

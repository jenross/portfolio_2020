import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Credentials from "../components/Credentials";
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
          <Credentials />
          <hr className="page-breakup" />
          <RecentWork />
          <hr className="page-breakup" />
          <Contact />
          <hr className="page-breakup" />
          <Instagram />
        </main>
      </Layout>
    </>
  );
}

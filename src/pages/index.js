import React from "react";
// import mj_logo from "../images/MercuryJane-05.png";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills"

export default function HomePage() {
  return (
    <>
        <Layout>
            <Hero />
            <Skills />
        </Layout>
    </>
  );
}
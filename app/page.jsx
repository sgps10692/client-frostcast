import React from "react";
import Layout from "../app/layout";
import Homeu from './components/pronosticos';
import Meteorologicas from './components/variables';
import QueEs from './components/que_es';
import Header from "./components/Header";
import Footer from "./components/Footer";

function Page() {
  return (
    <Layout>
      <Header />
      <Homeu />
      <Meteorologicas />
      <QueEs />
      <Footer />
    </Layout>
  );
}

export default Page;

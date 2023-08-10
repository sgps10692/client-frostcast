
import React from "react";
import Layout from "../app/layout";
import Homeu from "../app/pages/pronosticos";
import Meteorologicas from "../app/pages/variables";
import QueEs from "../app/pages/que_es";
import Nosotros from "../app/pages/sobre_nosotros";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Page() {
  return (
    <Layout>
      <Header />
      <Homeu />
      <Meteorologicas />
      <QueEs />
      <Nosotros />
      <Footer />
    </Layout>
  );
}

export default Page;

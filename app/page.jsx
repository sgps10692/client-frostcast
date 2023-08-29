import React from "react";
import Layout from "../app/layout";
<<<<<<< HEAD
import Homeu from "./components/pronosticos";
import Meteorologicas from "../app/pages/variables";
import QueEs from "../app/pages/que_es";
import Nosotros from "../app/pages/sobre_nosotros";
=======
import Homeu from './components/pronosticos';
import Meteorologicas from './components/variables';
import QueEs from './components/que_es';
>>>>>>> ae95e17dc6b1c2fbc44f6368df35c5a3adec6928
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

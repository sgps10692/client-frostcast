import React from "react";
import Header from "./components/Header";
import Pronostico from "./components/Pronostico";
import QueEs from "./components/QueEs";
import Footer from "./components/Footer";
import PreguntasFrecuentesComponente from "./preguntas/components/preguntas";

function Page() {
  return (
    <>
      <Header />
      <Pronostico />
      <QueEs />
      <PreguntasFrecuentesComponente/>
      <Footer />
    </>
  );
}

export default Page;

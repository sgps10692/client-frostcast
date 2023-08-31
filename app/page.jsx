import React from "react";
import Header from "./components/Header";
import Pronostico from "./components/Pronostico";
import QueEs from "./components/QueEs";
import Variable from "./components/Variable";
import Footer from "./components/Footer";

function Page() {
  return (
    <>
      <Header />
      <Pronostico />
      <QueEs />
      <Footer />
    </>
  );
}

export default Page;

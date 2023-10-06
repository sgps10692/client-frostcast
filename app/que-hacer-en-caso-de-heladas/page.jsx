import Header from "../components/Header";
import Footer from "../components/Footer";
import CasoDeHeladaComponente from "./components/casodehelada";
import CarruselComponente from "./components/carrusel";

export default function QueHacerEnCasoDeHeladasPage() {
  return (
    <>
      <Header />
      <CasoDeHeladaComponente/>
      <CarruselComponente/>
      <Footer />
    </>
  );
}

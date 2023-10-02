import Header from "../components/Header";
import Footer from "../components/Footer";
import CasoDeHeladaComponente from "./components/casodehelada";
import AcademicoCarruselComponente from "./components/academico";

export default function QueHacerEnCasoDeHeladasPage() {
  return (
    <>
      <Header />
      <CasoDeHeladaComponente/>
      <AcademicoCarruselComponente/>
      <Footer />
    </>
  );
}

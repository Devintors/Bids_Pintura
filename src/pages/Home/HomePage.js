import "./style.css";
import "./Estilo_Footer.css";
import "./Estilo_Header_Site.css";
import "./Estilo_Modal_De_Trabalhos.css";
import "./Estilo_Sobre.css";

import Header_Site from "../../components/Header_Site";
import Meus_Trabalhos from "../../components/Meus_Trabalhos";
import Sobre from "../../components/Sobre";
import Rodape from "../../components/Rodape";

export default function HomePage() {
  return (
    <div className="Corpo_Site">
      <main>
        <Header_Site />
        <Meus_Trabalhos />
      </main>
      <Sobre />
      <Rodape />
    </div>
  );
}

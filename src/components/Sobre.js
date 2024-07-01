const Pacote_De_Configuracao_JSON = await fetch(
  "./data/Pacote_De_Configuracao.json"
);

const Pacote_De_Configuracao = await Pacote_De_Configuracao_JSON.json();

const Contato_Configuracoes = Pacote_De_Configuracao.Contato;

export default function Sobre() {
  return (
    <div className="Centralizacao_Sobre_Nos">
      <div className="Sobre_Nos">
        <img src="./img/Pintor_Apresentcao.png" />
        <div className="Apresentacao">
          <h2 style={{ color: "white" }}>Bid's Pintura</h2>
          <h4 style={{ color: "#B3B3B3", marginTop: "15px" }}>
            Nos envie já uma mensagem no WhatsApp
            <br />
            Faça já seu orçamento
          </h4>
          <button
            style={{
              border: "none",
              display: "flex",
              flexDirection: "row",
              padding: "5px",
              marginTop: "10px",
              borderRadius: "5px",
            }}
            onClick={() => {
              window.open(
                "https://wa.me/" + Contato_Configuracoes.Numero_De_WhatsApp,
                "_blank"
              );
            }}
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{ color: "black", marginRight: "5px" }}
            ></i>
            <p>Entre em contato</p>
          </button>
        </div>
      </div>
    </div>
  );
}

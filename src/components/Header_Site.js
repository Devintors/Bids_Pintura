const Pacote_De_Configuracao_JSON = await fetch(
  "./data/Pacote_De_Configuracao.json"
);

const Pacote_De_Configuracao = await Pacote_De_Configuracao_JSON.json();

const Header_Configuracoes = Pacote_De_Configuracao.Header;

const Contato_Configuracoes = Pacote_De_Configuracao.Contato;

export default function Header_Site() {
  return (
    <header>
      <div className="container">
        <div className="Nav-traço">{Header_Configuracoes.Nome_Da_Empresa}</div>
        <img
          className="fundo-img"
          src={Header_Configuracoes.Imagem_De_Fundo}
          alt="Imagem de Fundo"
        />
        <div className="Nav-nome">
          {Header_Configuracoes.Apresentacao_Maior}
        </div>
        <div className="escritas-img">
          {Header_Configuracoes.Apresentacao_Menor}
        </div>
        <button
          className="btn"
          onClick={() => {
            window.open(
              "https://wa.me/" + Contato_Configuracoes.Numero_De_WhatsApp,
              "_blank"
            );
          }}
        >
          {Header_Configuracoes.Texto_No_Botao}
        </button>
        <div className="Div_Da_Div">
          <div className="Div_Da_Imagem">
            <img
              className="Ondas-inicio"
              src={Header_Configuracoes.Imagem_De_Forma_De_Fundo}
              alt="Imagem de forma de fundo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

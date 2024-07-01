const Pacote_De_Configuracao_JSON = await fetch(
  "./data/Pacote_De_Configuracao.json"
);

const Pacote_De_Configuracao = await Pacote_De_Configuracao_JSON.json();

const Meus_Trabalhos_Configuracao = Pacote_De_Configuracao.Meus_Trabalhos;

const Fileiras_De_Imagens = Meus_Trabalhos_Configuracao.Trabalhos.Fileira;

console.log(Fileiras_De_Imagens.length);

export default function Rolinho() {
  Fileiras_De_Imagens.map((fileira, index) => {
    return;
  });
}

import React, { useState } from "react";

const Pacote_De_Configuracao_JSON = await fetch(
  "./data/Pacote_De_Configuracao.json"
);

const Pacote_De_Configuracao = await Pacote_De_Configuracao_JSON.json();

const Meus_Trabalhos_Configuracao = Pacote_De_Configuracao.Meus_Trabalhos;

const Fileiras_De_Imagens = Meus_Trabalhos_Configuracao.Trabalhos.Fileira;

var Key_Unica = 0;
var Key_Coluna = 0;

export default function Meus_Trabalhos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const openModal = (src, alt, description) => {
    setModalImageSrc(src);
    setModalImageAlt(alt);
    setModalDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const Ativar_Coluna_Correspondente_Pincel = async (
    Key_Coluna_Ativada,
    Impar_Par
  ) => {
    var Elementos_Existentes = [];
    var Ordenacao_Correta_Elementos_Existentes = 0;
    for (var i = 0; i <= Key_Unica; i++) {
      var Elemento_Pesquisado = document.querySelector(
        "#Galeria_De_Imagem__Key_Unica_" +
          i +
          "__Key_Coluna_" +
          Key_Coluna_Ativada
      );
      if (Elemento_Pesquisado) {
        Elementos_Existentes[Ordenacao_Correta_Elementos_Existentes] =
          Elemento_Pesquisado;
        Ordenacao_Correta_Elementos_Existentes++;
      }
    }

    var Tamanho_De_Largura_Do_Site = window.innerWidth;
    var Tempo_Para_Esperar = Tamanho_De_Largura_Do_Site;
    var Tempo_Para_Esperar_Segundo = Tamanho_De_Largura_Do_Site;

    if (
      Tamanho_De_Largura_Do_Site <= 3000 &&
      Tamanho_De_Largura_Do_Site > 2550
    ) {
      Tempo_Para_Esperar_Segundo = 270;
    } else if (
      Tamanho_De_Largura_Do_Site <= 2550 &&
      Tamanho_De_Largura_Do_Site > 1000
    ) {
      Tempo_Para_Esperar_Segundo = 275;
    } else if (
      Tamanho_De_Largura_Do_Site <= 1000 &&
      Tamanho_De_Largura_Do_Site > 300
    ) {
      Tempo_Para_Esperar = 500;
      Tempo_Para_Esperar_Segundo = 275;
    }

    var Imagem_De_Rolinho_Animacao = document.querySelector(
      "#" + Key_Coluna_Ativada
    );

    Imagem_De_Rolinho_Animacao.parentNode.parentNode.style.overflowX = "auto";

    var Efeitos_De_Passagem = [];
    var Teste_De_Primeira_Execucao = true;
    var Repeticao_Infinita = 5;

    for (var i = 0; i < Repeticao_Infinita; i++) {
      if (
        Imagem_De_Rolinho_Animacao.nextElementSibling &&
        Teste_De_Primeira_Execucao
      ) {
        var Valor_Para_Aumentar_o_I = i + 1;
        Efeitos_De_Passagem[Valor_Para_Aumentar_o_I] =
          Imagem_De_Rolinho_Animacao.nextElementSibling;
        Teste_De_Primeira_Execucao = false;
        console.log(Efeitos_De_Passagem[Valor_Para_Aumentar_o_I]);
        Repeticao_Infinita++;
      } else if (Efeitos_De_Passagem[i]) {
        if (Efeitos_De_Passagem[i].nextElementSibling) {
          var Valor_Para_Aumentar_o_I = i + 1;
          Efeitos_De_Passagem[Valor_Para_Aumentar_o_I] =
            Efeitos_De_Passagem[i].nextElementSibling;

          Repeticao_Infinita++;
        } else {
          break;
        }
      } else {
        break;
      }
    }

    var Lado_De_Animacao = Imagem_De_Rolinho_Animacao.style.animationName;
    var Tempo_De_Rolinho = Tamanho_De_Largura_Do_Site / 1000;

    Imagem_De_Rolinho_Animacao.style.animationName = "";
    Imagem_De_Rolinho_Animacao.style.animation = "";
    void Imagem_De_Rolinho_Animacao.offsetWidth;

    for (var i = 1; i < Efeitos_De_Passagem.length; i++) {
      Efeitos_De_Passagem[i].style.animationName = "";
      Efeitos_De_Passagem[i].style.animation = "";
      void Efeitos_De_Passagem[i].offsetWidth;

      Efeitos_De_Passagem[i].style.animation =
        Lado_De_Animacao + "_Sumir " + Tempo_De_Rolinho + "s forwards linear";
    }

    Imagem_De_Rolinho_Animacao.style.animation =
      Lado_De_Animacao + " " + Tempo_De_Rolinho + "s forwards linear";

    for (var i = 0; i < Elementos_Existentes.length; i++) {
      if (i == 0) {
        await Espera_De_Tempo_Para_Continuar(Tempo_Para_Esperar);

        if (Impar_Par) {
          Elementos_Existentes[i].classList =
            "Pintura_Imagens_Individuais Galeria_Sendo_Pintada_Direita_Esquerda";
          Elementos_Existentes[i].parentNode.classList =
            "Imagens_Retrato_Trabalho Alterar_Visibilidade_Para_Maior";
        } else {
          Elementos_Existentes[i].classList =
            "Pintura_Imagens_Individuais Galeria_Sendo_Pintada_Esquerda_Direita";
          Elementos_Existentes[i].parentNode.classList =
            "Imagens_Retrato_Trabalho Alterar_Visibilidade_Para_Maior";
        }
      } else {
        await Espera_De_Tempo_Para_Continuar(Tempo_Para_Esperar_Segundo);

        if (Impar_Par) {
          Elementos_Existentes[i].classList =
            "Pintura_Imagens_Individuais Galeria_Sendo_Pintada_Direita_Esquerda";
          Elementos_Existentes[i].parentNode.classList =
            "Imagens_Retrato_Trabalho Alterar_Visibilidade_Para_Maior";
        } else {
          Elementos_Existentes[i].classList =
            "Pintura_Imagens_Individuais Galeria_Sendo_Pintada_Esquerda_Direita";
          Elementos_Existentes[i].parentNode.classList =
            "Imagens_Retrato_Trabalho Alterar_Visibilidade_Para_Maior";
        }
      }
    }
  };

  const Espera_De_Tempo_Para_Continuar = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Pintado"), ms);
    });
  };

  Key_Unica++;
  return (
    <>
      <div className="Pinturas">Meus Trabalhos</div>

      {Fileiras_De_Imagens.map((fileira, index) => {
        Key_Coluna++;
        Key_Unica++;
        return (
          <div
            key={index}
            className="rolagem-trabalhos"
            style={
              (index + 1) % 2 == 0
                ? {
                    justifyContent: "end",
                    flexDirection: "row-reverse",
                    overflowX: "hidden",
                  }
                : { overflowX: "hidden" }
            }
          >
            <div
              className="img-rolinho"
              style={
                (index + 1) % 2 == 0
                  ? {
                      display: "flex",
                      flexDirection: "row-reverse",
                      position: "absolute",
                    }
                  : { position: "absolute" }
              }
              onClick={(e) => {
                if (e.target.id) {
                  Ativar_Coluna_Correspondente_Pincel(
                    e.target.id,
                    (index + 1) % 2 == 0
                  );
                }
              }}
            >
              <img
                src={
                  (index + 1) % 2 == 0
                    ? Meus_Trabalhos_Configuracao.Imagem_Para_Animacao_Invertida
                    : Meus_Trabalhos_Configuracao.Imagem_Para_Animacao
                }
                id={"Rolinho_Coluna_" + Key_Coluna}
                alt="Imagem para pintar a galeria"
                className="rolinho"
                style={
                  (index + 1) % 2 == 0
                    ? {
                        animationName: "Pintar_Tras",
                      }
                    : {
                        animationName: "Pintar_Frente",
                      }
                }
              />

              <span
                className="Sombra_Rolinho"
                style={
                  (index + 1) % 2 == 0
                    ? {
                        animationName: "Pintar_Tras",
                        marginLeft: 0,
                        marginRight: "200px",
                      }
                    : {
                        animationName: "Pintar_Frente",
                      }
                }
              ></span>
              <span
                className="Sombra_Rolinho_Avancado"
                style={
                  (index + 1) % 2 == 0
                    ? {
                        animationName: "Pintar_Tras",
                        marginLeft: 0,
                        marginRight: "275px",
                      }
                    : {
                        animationName: "Pintar_Frente",
                      }
                }
              ></span>
            </div>

            <div
              className="img-rolinho"
              style={{
                zIndex: -999,
                opacity: 0,
              }}
            >
              <img
                src={
                  (index + 1) % 2 == 0
                    ? Meus_Trabalhos_Configuracao.Imagem_Para_Animacao_Invertida
                    : Meus_Trabalhos_Configuracao.Imagem_Para_Animacao
                }
                id={"Rolinho_Coluna_" + Key_Coluna}
                alt="Imagem para pintar a galeria"
                className="rolinho"
                style={
                  (index + 1) % 2 == 0
                    ? {
                        animationName: "Pintar_Tras",
                      }
                    : {
                        animationName: "Pintar_Frente",
                      }
                }
              />
            </div>

            {fileira.map((item, itemIndex) => {
              Key_Unica++;
              return (
                <div key={itemIndex} className="Imagens_Retrato_Trabalho">
                  <img
                    src={Meus_Trabalhos_Configuracao.Imagem_De_Forma_De_Fundo}
                    className="Pintura_Imagens_Individuais"
                    alt="Imagem de pintura feita"
                    style={{
                      backgroundImage: "url(" + item.Local_Da_Imagem + ")",
                      zIndex: 999,
                    }}
                    id={
                      "Galeria_De_Imagem__Key_Unica_" +
                      Key_Unica +
                      "__Key_Coluna_Rolinho_Coluna_" +
                      Key_Coluna
                    }
                    data-description={item.Descricao}
                    onClick={(e) => {
                      console.log("Ativo");
                      openModal(
                        item.Local_Da_Imagem,
                        "Imagem de pintura feita",
                        item.Descricao
                      );
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })}

      {modalIsOpen && (
        <div id="myModal" className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={modalImageSrc} alt={modalImageAlt} id="modal-image" />
            <div className="modal-description" id="modal-description">
              {modalDescription}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

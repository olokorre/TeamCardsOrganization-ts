import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Banner from "./componentes/Banner";
import { IColaborador } from "./compartilhado/interfaces/IColaborador";
import Botao from "./componentes/Botao";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
  const [showForm, setShowForm] = useState(false);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner
        enderecoImagem="/imagens/banner.png"
        textoAlternativo="O banner principal da página do Organo"
      />

      <div style={{float: 'right', marginRight: '16px'}}>
        <Botao onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancelar" : "Adicionar novo colaborador"}
        </Botao>
      </div>

      {showForm && (
        <Formulario
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={(colaborador) => {
            aoNovoColaboradorAdicionado(colaborador);
            setShowForm(false);
          }}
        />
      )}

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;

import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if(etapaAtual === formularios.length-1) {
      aoEnviar(dadosColetados);
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletaDados} />,
    <DadosPessoais aoEnviar={coletaDados} voltar={voltar} />,
    <DadosEntrega aoEnviar={coletaDados} />,
    <Typography variant="h5"> Obrigado pelo Cadastro! </Typography>
  ];

  return <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularioAtual(etapaAtual)}
  </>;

  function coletaDados(dados) {
    setDadosColetados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual+1);
  }

  function voltar() {
    setEtapaAtual(etapaAtual-1);
  }

  function formularioAtual(etapa) {
    return formularios[etapa];
  }
}

export default FormularioCadastro;

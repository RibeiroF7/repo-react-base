import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";
import { botaoClicadoRequest } from "../../modules/example/slice"; // caminho conforme sua estrutura

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.example);

  function handleClick(e) {
    e.preventDefault();
    dispatch(botaoClicadoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>hello</small>
      </Title>
      <Paragrafo>Lorem ypsilom</Paragrafo>

      <button type="button" onClick={handleClick} disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {error && <Paragrafo style={{ color: "red" }}>Erro: {error}</Paragrafo>}
      {data && (
        <Paragrafo style={{ color: "green" }}>
          Resultado: {data}
        </Paragrafo>
      )}
    </Container>
  );
};

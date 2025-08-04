import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav, Status } from "./styled";

export default function Header() {
  const { loading, data } = useSelector((state) => state.example);

  return (
    <Nav>
      <Link to="/" aria-label="Home">
        <FaHome size={24} />
      </Link>
      <Link to="/login" aria-label="Login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/a" aria-label="Outra rota">
        <FaSignInAlt size={24} />
      </Link>

      <Status>
        {loading && <span>Carregando...</span>}
        {!loading && data && <span className="success">Clicado</span>}
        {!loading && !data && <span className="idle">Não clicado</span>}
      </Status>
    </Nav>
  );
}

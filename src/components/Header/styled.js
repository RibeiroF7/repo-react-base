import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  color: #fff;

  a {
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  svg {
    display: block;
  }
`;

export const Status = styled.div`
  margin-left: auto;
  font-size: 0.9rem;
  display: flex;
  gap: 0.5rem;

  .success {
    color: #4ade80; /* verde */
  }
  .idle {
    color: #f1f5f9; /* neutro claro */
  }
`;

import Link from "next/link";
import styled from "styled-components";

const DetailsCardStyled = styled.div`
  display: grid;
  grid-template-columns: 100;
  grid-template-rows: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #5a79ba;
  list-style: none;
  border-radius: 15px;
  padding: 15px;
  margin: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75);
  line-height: 1.2;
  margin: 1em 2em;
  padding: 2rem 1rem;
`;

const StyledLink = styled(Link)`
  position: absolute;
  border: 2px solid black;
  right: 50%;
  transform: translateX(50%);
  text-align: center;
  color: white;
  font-weight: 500;
  border: 2px solid #555;
  background-color: #e04e1a;
  font-size: 1.2rem;
  border-radius: 7px;
  text-decoration: none;
  padding: 10px;
  width: 120px;
`;
const StyledShopLink = styled(Link)`
  text-align: center;
  color: white;
  font-weight: 400;
  border: 1px solid #555;
  background-color: #002c48;
  font-size: 1rem;
  border-radius: 7px;
  text-decoration: none;
  padding: 7px 10px;
  width: 120px;
`;

export { DetailsCardStyled, StyledLink, StyledShopLink };

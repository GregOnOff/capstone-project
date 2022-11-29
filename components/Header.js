import { FaCoins } from "react-icons/fa";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <IconStyled>
        <FaCoins style={{ fontSize: "2.5em" }} />
      </IconStyled>
      <DivStyled>
        <h1>DIRNT!?</h1>
        <span>Do I really need that!?</span>
      </DivStyled>
    </HeaderStyled>
  );
}

const IconStyled = styled.div`
  width: 60px;
  margin-right: 0px;
`;

const HeaderStyled = styled.header`
  width: 100%;
  height: 85px;
  background: linear-gradient(14deg, #021d2e, 85%, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 7px black;
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;
`;

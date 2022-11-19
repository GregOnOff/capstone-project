import { HiOutlineBellSnooze } from "react-icons/hi2";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <IconStyled>
        <HiOutlineBellSnooze style={{ fontSize: "3em" }} />
      </IconStyled>
      <h1>DIRNT?</h1>
    </HeaderStyled>
  );
}

const IconStyled = styled.div`
  width: 60px;
  margin-right: 10px;
`;

const HeaderStyled = styled.header`
  width: 100%;
  height: 85px;
  background: linear-gradient(90deg, #333, #777);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 7px black;
`;

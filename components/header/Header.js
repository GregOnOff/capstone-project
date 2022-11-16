import BellIcon from "../icons/BellIcon";
import { HeaderStyled } from "../styles/headerStyles/Header.styled";
import { IconStyled } from "../styles/headerStyles/Icon.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <IconStyled>
        <BellIcon />
      </IconStyled>
      <h1>DIRNT?</h1>
    </HeaderStyled>
  );
}

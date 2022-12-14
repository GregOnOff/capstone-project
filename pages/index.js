import Link from "next/link";
import Wishlist from "../components/Wishlist";
import styled from "styled-components";
import { FaPlusSquare } from "react-icons/fa";
import SavingsCounter from "../components/SavingsCounter";

export default function Home({ itemData }) {
  return (
    <>
      <Wishlist items={itemData.wishlistItems} />
      <SavingsCounter itemData={itemData} />
      <FooterStyled>
        <LinkStyled href={"/new"}>
          <SpanStyled>
            <FaPlusSquare />
            ADD NEW ITEM
          </SpanStyled>
        </LinkStyled>
      </FooterStyled>
    </>
  );
}

const LinkStyled = styled(Link)`
  position: absolute;
  background-color: #4468b5;
  color: white;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75);
  &:hover {
    transform: scale(0.97);
  }
`;

const FooterStyled = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #021d2e;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.75);
`;

const SpanStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

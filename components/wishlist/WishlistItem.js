import Card from "../Card";
import ItemCategoryIcon from "../ItemCategoryIcon";
import { FaClock } from "react-icons/fa";
import styled from "styled-components";
import Link from "next/link";

export default function WishlistItem({ title, id, price, time, category }) {
  return (
    <LinkStyled href={"/items/" + id} key={id}>
      <Card>
        <h2>{title}</h2>
        <ItemCategoryIcon category={category} />
        <p>{price} € </p>
        <PStyled>
          {time} Days left
          <FaClock style={{ marginLeft: 10 }} />
        </PStyled>
      </Card>
    </LinkStyled>
  );
}

const PStyled = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  scroll-snap-align: start;
`;

import Card from "../Card";
import ItemCategoryIcon from "../ItemCategoryIcon";
import { BsClock } from "react-icons/bs";
import styled from "styled-components";

export default function WishlistItem({
  title,
  id,
  price,
  time,
  image,
  category,
}) {
  return (
    <div>
      <Card>
        <h2>{title}</h2>
        <ItemCategoryIcon category={category} />
        <p>{price} € </p>
        <PStyled>
          {time} Days left
          <BsClock style={{ marginLeft: 10 }} />
        </PStyled>
      </Card>
    </div>
  );
}

const PStyled = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

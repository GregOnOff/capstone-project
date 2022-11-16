import { Card } from "../styles/wishlistStyles/ItemCard";

import styled from "styled-components";

import ClockIcon from "../icons/clockIcon";
import { ImagePlaceholder } from "../styles/wishlistStyles/ImageOnCard";

export default function WishlistItem(props) {
  const { title, key, id, price, time, image } = props;
  return (
    <div key={key}>
      <Card>
        <h2>{title}</h2>
        <ImagePlaceholder src={"/" + image}></ImagePlaceholder>
        <p>{price}€</p>
        <SpaceBetween>
          <IconSet>
            <ClockIcon />
          </IconSet>
          <p> {time} Days left</p>
        </SpaceBetween>
      </Card>
    </div>
  );
}

const IconSet = styled.div`
  width: 24px;
  padding-top: 3px;
  margin-right: 5px;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

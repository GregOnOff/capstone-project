import WishlistItem from "./WishlistItem";
import styled from "styled-components";

export default function Wishlist({ items }) {
  return (
    <div>
      <Headline>Wishlist</Headline>
      <ListStyled>
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            time={item.timeLeft}
            image={item.image}
            category={item.category}
          />
        ))}
      </ListStyled>
    </div>
  );
}
export { WishlistItem };
const Headline = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

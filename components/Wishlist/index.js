import WishlistItem from "./WishlistItem";
import styled from "styled-components";

export default function Wishlist({ items }) {
  return (
    <>
      <Headline>Wishlist</Headline>
      <ListStyled>
        {structuredClone(items)
          .reverse()
          .map((item) => (
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
    </>
  );
}

export { WishlistItem };
const Headline = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0;
  line-height: 0.5;
`;

const ListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  scroll-snap-align: initial;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin: 0;
  padding: 0;
`;

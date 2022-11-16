import { HeadlineWL } from "../styles/wishlistStyles/HeadlineWL";
import { WishlistUL } from "../styles/wishlistStyles/WishlistUL";
import WishlistItem from "./WishlistItem";

export default function Wishlist(props) {
  const { items } = props;
  return (
    <div>
      <HeadlineWL>Wishlist</HeadlineWL>
      <WishlistUL>
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            time={item.timeLeft}
            image={item.image}
          />
        ))}
      </WishlistUL>
    </div>
  );
}

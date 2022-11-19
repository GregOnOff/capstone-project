import Wishlist, { WishlistItem } from "../components/Wishlist";
import { getAllWishlistItems } from "../dummy-data";

export default function Home() {
  const completeItemList = getAllWishlistItems();
  return <Wishlist items={completeItemList} />;
}

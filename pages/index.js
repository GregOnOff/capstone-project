import Header from "../components/header/Header";
import Wishlist from "../components/wishlist/Wishlist";
import { getAllWishlistItems } from "../dummy-data";

export default function Home() {
  const completeItemList = getAllWishlistItems();
  return (
    <>
      <Header />
      <Wishlist items={completeItemList} />
    </>
  );
}

import DetailsCard from "../../components/DetailsCard";

export default function DetailsPage({ itemData }) {
  return <DetailsCard items={itemData.wishlistItems} />;
}

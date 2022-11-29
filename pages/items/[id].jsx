import DetailsCard from "../../components/details/DetailsCard";

export default function DetailsPage({ itemData }) {
  return (
    <div>
      <DetailsCard items={itemData.wishlistItems} />
    </div>
  );
}

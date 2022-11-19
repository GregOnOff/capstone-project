import Card from "../Card";
import ItemCategoryIcon from "../ItemCategoryIcon";
import { BsClock } from "react-icons/bs";

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
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {time} Days left
          <BsClock style={{ marginLeft: 10 }} />
        </p>
      </Card>
    </div>
  );
}

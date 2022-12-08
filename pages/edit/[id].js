import { useRouter } from "next/router";
import EditData from "../../components/EditData";

export default function EditDetails({ itemData, setItemData }) {
  const items = itemData.wishlistItems;
  const router = useRouter();
  const { id } = router.query;
  if (!id) return;
  const editableItem = items.find((item) => item.id === id);

  const editItemData = (id, title, price, link, category, image) => {
    const newItemData = {
      id,
      title,
      price,
      link,
      category,
      image,
    };

    setItemData((itemData) => {
      return {
        ...itemData,
        wishlistItems: itemData.wishlistItems.map((item) => {
          if (item.id === newItemData.id) {
            return { ...item, ...newItemData };
          }
          return item;
        }),
      };
    });
  };
  const deleteHandler = (id) => {
    setItemData((itemData) => {
      return {
        ...itemData,
        wishlistItems: itemData.wishlistItems.filter((item) => {
          return item.id !== id;
        }),
      };
    });
    router.push("/");
  };

  return (
    <EditData
      item={editableItem ?? {}}
      editItemData={editItemData}
      deleteHandler={deleteHandler}
    />
  );
}

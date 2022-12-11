import { useRouter } from "next/router";
import FormSheet from "../../components/FormSheet";

export default function EditDetails({ itemData, setItemData }) {
  const items = itemData.wishlistItems;
  const router = useRouter();
  const { id } = router.query;
  if (!id) return;
  const editableItem = items.find((item) => item.id === id);

  const onSave = (itemAll) => {
    setItemData((itemData) => {
      return {
        ...itemData,
        wishlistItems: itemData.wishlistItems.map((item) => {
          if (item.id === id) {
            return { ...item, ...itemAll };
          }
          return item;
        }),
      };
    });
  };
  const deleteHandler = () => {
    setItemData((itemData) => {
      const x = itemData.wishlistItems.find((item) => item.id === id);

      return {
        ...itemData,
        savings: x.price + itemData.savings,
        deletedItems: [
          ...itemData.deletedItems,
          {
            title: x.title,
            price: x.price,
          },
        ],
        wishlistItems: itemData.wishlistItems.filter((item) => {
          return item.id !== id;
        }),
      };
    });

    router.push("/");
  };

  return (
    <FormSheet
      onSave={onSave}
      onDelete={deleteHandler}
      item={editableItem}
      push={() => router.push("/")}
      editMode
    />
  );
}

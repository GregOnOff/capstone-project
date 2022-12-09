import { useRouter } from "next/router";
import FormSheet from "../../components/FormSheet";

export default function AddItemForm({ setItemData }) {
  const router = useRouter();

  function onSave(itemAll) {
    setItemData((itemData) => {
      return {
        ...itemData,
        wishlistItems: [
          ...itemData.wishlistItems,
          {
            ...itemAll,
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
          },
        ],
      };
    });
  }
  return <FormSheet onSave={onSave} push={() => router.push("/")} />;
}

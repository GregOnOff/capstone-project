import { useRouter } from "next/router";
import SnackBar from "../../components/SnackBar";
import { useState } from "react";
import {
  FormStyled,
  LinkStyled,
  SaveBtnStyled,
  SelectStyled,
  InputStyled,
  DivStyled,
  BtnDivStyled,
} from "../../components/FormStyled";

export default function AddItemForm({ setItemData }) {
  const router = useRouter();
  const [showSnacky, setShowSnacky] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemAll = Object.fromEntries(formData);

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
    setShowSnacky(true);
  }

  return (
    <DivStyled>
      {showSnacky && (
        <SnackBar
          text={"Submit was succesful!"}
          onClose={() => router.push("/")}
        />
      )}
      {!showSnacky && (
        <>
          <h3>Please enter product data</h3>
          <FormStyled onSubmit={submitHandler}>
            <label htmlFor="itemName">What do you want to buy?</label>
            <InputStyled id="text" name="title" required />

            <label htmlFor="itemPrice" required>
              Price
            </label>
            <InputStyled
              type="number"
              id="itemPrice"
              name="price"
              min={1}
              max={10000}
              required
            />

            <label htmlFor="itemCategory">Category</label>
            <SelectStyled
              type="select"
              id="itemCategory"
              name="category"
              required
            >
              <option value="others">Others</option>
              <option value="tech">Tech</option>
              <option value="furniture">Furniture</option>
              <option value="health">Health</option>
              <option value="service">Services</option>
              <option value="fashion">Fashion</option>
            </SelectStyled>
            <label htmlFor="link">Link</label>
            <InputStyled type="url" id="link" name="link" />

            <label htmlFor="itemtime">Time to consider </label>
            <InputStyled
              type="number"
              id="itemTime"
              min={1}
              max={90}
              placeholder="(1 - 90 days)"
              name="timeLeft"
              required
            />

            <BtnDivStyled>
              <LinkStyled href={"/"}> Cancel </LinkStyled>
              <SaveBtnStyled type="submit">Save</SaveBtnStyled>
            </BtnDivStyled>
          </FormStyled>
        </>
      )}
    </DivStyled>
  );
}

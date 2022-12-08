import {
  FormStyled,
  LinkStyled,
  SaveBtnStyled,
  SelectStyled,
  InputStyled,
  BtnDivStyled,
} from "./FormStyled";
import { useRouter } from "next/router";
import SnackBar from "../components/SnackBar";
import { useState } from "react";

export default function EditData({ item, editItemData, deleteHandler }) {
  const router = useRouter();
  const { id } = router.query;
  const [showSnacky, setShowSnacky] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemAll = Object.fromEntries(formData);

    editItemData(
      item.id,
      itemAll.title,
      itemAll.price,
      itemAll.link,
      itemAll.category,
      itemAll.image,
      itemAll.timeLeft
    );
    setShowSnacky(true);
  }

  return (
    <>
      {showSnacky && (
        <SnackBar
          text={"Edit was succesful!"}
          onClose={() => router.push("/")}
        />
      )}
      {!showSnacky && (
        <FormStyled onSubmit={submitHandler}>
          <label htmlFor="itemName">You can change data below </label>
          <InputStyled
            id="text"
            name="title"
            required
            defaultValue={item.title}
          />

          <label htmlFor="itemPrice" required>
            Price
          </label>
          <InputStyled
            type="number"
            id="itemPrice"
            name="price"
            min={1}
            max={10000}
            step={1}
            required
            defaultValue={item.price}
          />

          <label htmlFor="itemCategory">Category</label>
          <SelectStyled
            type="select"
            id="itemCategory"
            name="category"
            required
            defaultValue={item.category}
          >
            <option value="others">Others</option>
            <option value="tech">Tech</option>
            <option value="furniture">Furniture</option>
            <option value="health">Health</option>
            <option value="service">Services</option>
            <option value="fashion">Fashion</option>
          </SelectStyled>
          <label htmlFor="link">Link</label>
          <InputStyled
            type="url"
            id="link"
            name="link"
            defaultValue={item.link}
          />

          <BtnDivStyled>
            <LinkStyled href={"/"}> Cancel </LinkStyled>
            <SaveBtnStyled type="submit">Save</SaveBtnStyled>
          </BtnDivStyled>
          <button onClick={() => deleteHandler(id)}>Delete</button>
        </FormStyled>
      )}
    </>
  );
}

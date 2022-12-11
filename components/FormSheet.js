import SnackBar from "./SnackBar";
import { useState } from "react";
import {
  FormStyled,
  LinkStyled,
  SaveBtnStyled,
  SelectStyled,
  InputStyled,
  DivStyled,
  BtnDivStyled,
  DeleteButton,
} from "./FormStyled";

export default function FormSheet({ onSave, onDelete, push, editMode, item }) {
  const [showSnacky, setShowSnacky] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemAll = Object.fromEntries(formData);
    onSave({
      timeLeft: Number(itemAll.timeLeft),
      price: Number(itemAll.price),
      title: itemAll.title.trim(),
      category: itemAll.category,
      link: itemAll.link.trim(),
    });
    setShowSnacky(true);
  }

  return (
    <DivStyled>
      {showSnacky && <SnackBar text={"Submit was succesful!"} onClose={push} />}
      {!showSnacky && (
        <>
          <h3>Please enter product data</h3>
          <FormStyled onSubmit={submitHandler}>
            <label htmlFor="itemName">What do you want to buy?</label>
            <InputStyled
              id="text"
              name="title"
              required
              defaultValue={item?.title}
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
              required
              defaultValue={item?.price}
            />

            <label htmlFor="itemCategory">Category</label>
            <SelectStyled
              type="select"
              id="itemCategory"
              name="category"
              required
              defaultValue={item?.category}
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
              defaultValue={item?.link}
            />

            <label htmlFor="itemtime">Time to consider</label>
            <InputStyled
              type="number"
              id="itemTime"
              min={1}
              max={90}
              placeholder="(1 - 90 days)"
              name="timeLeft"
              step={1}
              required
              defaultValue={item?.timeLeft}
            />

            <BtnDivStyled>
              <LinkStyled href={"/"}> Cancel </LinkStyled>
              <SaveBtnStyled type="submit">Save</SaveBtnStyled>
            </BtnDivStyled>
            {editMode && <DeleteButton onClick={onDelete}>Delete</DeleteButton>}
          </FormStyled>
        </>
      )}
    </DivStyled>
  );
}

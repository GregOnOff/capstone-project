import { useRouter } from "next/router";
import ItemCategoryIcon from "../ItemCategoryIcon";
import {
  DetailsCardStyled,
  StyledShopLink,
  StyledLink,
  ButtonBox,
} from "./DetailsStyled";

export default function DetailsCard({ items }) {
  const router = useRouter();

  const { id } = router.query;
  if (!id) return;
  const details = items.find((item) => item.id === id);

  const itemDate = new Date(details.date);

  return (
    <>
      <DetailsCardStyled>
        <h2>{details.title}</h2>
        <p>Price: {details.price}€</p>
        <ItemCategoryIcon category={details.category} />
        <p>Time to consider : {details.timeLeft} days</p>

        <p>
          Added:{" "}
          {itemDate.toLocaleString("en-US", {
            dateStyle: "full",
          })}
        </p>
        {details.link === "" ? (
          <p>Link : No Link submitted</p>
        ) : (
          <div>
            <StyledShopLink href={`${details.link}`}>Shop-Link</StyledShopLink>
          </div>
        )}
      </DetailsCardStyled>

      <ButtonBox>
        <StyledLink href={"/"}>Back</StyledLink>
        <StyledLink href={`/edit/${id}`}>Edit</StyledLink>
      </ButtonBox>
    </>
  );
}

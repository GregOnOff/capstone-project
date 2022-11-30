import { useRouter } from "next/router";

import ItemCategoryIcon from "../ItemCategoryIcon";

import { DetailsCardStyled, StyledLink, StyledShopLink } from "./DetailsStyled";

export default function DetailsCard({ items }) {
  function findRoute(item) {
    return item.id === id;
  }

  const router = useRouter();
  const { id } = router.query;
  if (!id) return;
  const details = items.find(findRoute);

  console.log(details.date);
  let itemDate = new Date(details.date);

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
      <div>
        <StyledLink href={"/"}>Back</StyledLink>
      </div>
    </>
  );
}

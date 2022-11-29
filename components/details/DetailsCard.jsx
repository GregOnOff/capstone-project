import { useRouter } from "next/router";
import moment from "moment/moment";
import ItemCategoryIcon from "../ItemCategoryIcon";
import Link from "next/link";
import styled from "styled-components";
import { DetailsCardStyled, StyledLink, StyledShopLink } from "./DetailsStyled";

export default function DetailsCard({ items }) {
  function findMe(item) {
    return item.id === actualRoute;
  }

  const router = useRouter();
  const actualRoute = router.query.id;
  if (!actualRoute) return;
  const details = items.find(findMe);

  return (
    <>
      <DetailsCardStyled>
        <h2>{details.title}</h2>
        <p>Price: {details.price}</p>
        <ItemCategoryIcon category={details.category} />
        <p>Time to consider : {details.timeLeft} days</p>

        <p>Added: {moment(details.date).calendar()}</p>
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

import Image from "next/image";
import styled from "styled-components";

export default function ItemCategoryIcon({ category }) {
  function getIconByCategory(category) {
    switch (category) {
      case "tech":
        return (
          <ImageStyled
            src="/images/tech.png"
            alt="Tech icon"
            width={75}
            height={75}
          />
        );
      case "furniture":
        return (
          <ImageStyled
            src="/images/couch.png"
            alt="Furniture icon"
            width={75}
            height={75}
          />
        );
      case "fashion":
        return (
          <ImageStyled
            src="/images/fashion.png"
            alt="Fashion icon"
            width={75}
            height={75}
          />
        );
      case "service":
        return (
          <ImageStyled
            src="/images/service.png"
            alt="Servide icon"
            width={75}
            height={75}
          />
        );
      case "health":
        return (
          <ImageStyled
            src="/images/health.png"
            alt="Health Icon"
            width={75}
            height={75}
            priority
          />
        );
      case "others":
        return (
          <ImageStyled
            src="/images/others.png"
            alt="Others icon"
            width={75}
            height={75}
          />
        );
      default:
        return "Panda";
    }
  }

  return (
    <span style={{ fontSize: "3.5em", lineHeight: 0 }}>
      {getIconByCategory(category)}
    </span>
  );
}

const ImageStyled = styled(Image)`
  filter: invert(100);
`;

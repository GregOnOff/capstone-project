export default function ItemCategoryIcon({ category }) {
  function getIconByCat(category) {
    switch (category) {
      case "tech":
        return (
          <img
            src="/images/tech.png"
            width={60}
            style={{ filter: "invert(100)" }}
          />
        );
      case "furniture":
        return (
          <img
            src="/images/couch.png"
            width={60}
            style={{ filter: "invert(100)" }}
          />
        );
      case "fashion":
        return (
          <img
            src="/images/fashion.png"
            width={60}
            style={{ filter: "invert(100)" }}
          />
        );
      case "service":
        return (
          <img
            src="/images/service.png"
            width={60}
            style={{ filter: "invert(100)" }}
          />
        );
      case "health":
        return (
          <img
            src="/images/health.png"
            width={60}
            style={{ filter: "invert(100)" }}
          />
        );
      case "others":
        return (
          <img
            src="/images/others.png"
            width={60}
            style={{ filter: "invert(100)" }}
          />
        );
      default:
        return "Panda";
    }
  }

  return (
    <span style={{ fontSize: "3.5em", lineHeight: 0 }}>
      {getIconByCat(category)}
    </span>
  );
}

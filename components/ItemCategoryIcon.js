import { TbSofa } from "react-icons/tb";
import { MdMonitor } from "react-icons/md";
import { RiTShirt2Line } from "react-icons/ri";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { GiMedicines } from "react-icons/gi";
import { BsFillQuestionSquareFill } from "react-icons/bs";

export default function ItemCategoryIcon({ category }) {
  function getIconByCat(category) {
    switch (category) {
      case "tech":
        return <MdMonitor />;
      case "furniture":
        return <TbSofa />;
      case "fashion":
        return <RiTShirt2Line />;
      case "service":
        return <HiOutlineWrenchScrewdriver />;
      case "health":
        return <GiMedicines />;
      case "others":
        return <BsFillQuestionSquareFill />;
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

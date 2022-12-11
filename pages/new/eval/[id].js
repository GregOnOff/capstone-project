import EvaluationForm from "../../../components/Evaluation";

export default function EvalEntries({ itemData, setItemData }) {
  console.log(itemData);
  return (
    <div>
      <EvaluationForm setItemData={setItemData} itemData={itemData} />
    </div>
  );
}

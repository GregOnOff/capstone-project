import { useRouter } from "next/router";

export default function EvaluationForm({ setItemData, itemData }) {
  const items = itemData.wishlistItems;
  const router = useRouter();
  const { id } = router.query;

  function submitHandlerEval(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const evalData = Object.fromEntries(formData);
    console.log(evalData);
    onAddEval(evalData);
  }
  const onAddEval = (evalData) => {
    setItemData((itemData) => {
      console.log(itemData);
      return {
        ...itemData,
        wishlistItems: items.map((item) => {
          if (item.id === id) {
            return { ...item, eval: evalData };
          }
          return item;
        }),
      };
    });
  };

  return (
    <div>
      <h2>Please answer the questions</h2>
      <form onSubmit={submitHandlerEval}>
        <p>Do you already have a similar Item?</p>
        <input
          type="radio"
          name="q1"
          value="true"
          id="question_1_yes"
          required
        />
        <label htmlFor="question_1_yes">YES</label>
        <input type="radio" name="q1" value="false" id="question_1_no" />
        <label htmlFor="question_1_no">NO</label>
        <p>can you afford it?</p>
        <input
          type="radio"
          name="q2"
          value="true"
          id="question_2_yes"
          required
        />
        <label htmlFor="question_2_yes">YES</label>
        <input type="radio" name="q2" value="false" id="question_2_no" />
        <label htmlFor="question_2_no">NO</label>
        <p>Do you have enough room?</p>
        <input
          type="radio"
          name="q3"
          value="true"
          id="question_3_yes"
          required
        />
        <label htmlFor="question_3_yes">YES</label>
        <input type="radio" name="q3" value="false" id="question_3_no" />
        <label htmlFor="question_3_no">NO</label>
        <p>Would it be easy to resell?</p>
        <input
          type="radio"
          name="q4"
          value="true"
          id="question_4_yes"
          required
        />
        <label htmlFor="question_4_yes">YES</label>
        <input type="radio" name="q4" value="false" id="question_4_no" />
        <label htmlFor="question_4_no">NO</label>
        <p>Do you have to take debt?</p>
        <input
          type="radio"
          name="q5"
          value="true"
          id="question_5_yes"
          required
        />
        <label htmlFor="question_5_yes">YES</label>
        <input type="radio" name="q5" value="false" id="question_5_no" />
        <label htmlFor="question_5_no">NO</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

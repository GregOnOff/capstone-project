import styled from "styled-components";

export default function SavingsCounter({ itemData }) {
  return (
    <>
      <CounterBox>
        <div>
          <NumberedOutcomeStyled>{itemData.savings} €</NumberedOutcomeStyled>
          <NumberedOutcomeStyled>
            {itemData.deletedItems.length}
          </NumberedOutcomeStyled>
        </div>
        <div>
          <DeclarationStyled>Saved up</DeclarationStyled>
          <DeclarationStyled>Avoided</DeclarationStyled>
        </div>
      </CounterBox>
    </>
  );
}

const CounterBox = styled.div`
  position: absolute;
  bottom: 12%;
  left: 0;
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: right;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 150px;
  background-color: #5a79ba;
  border-radius: 0px 15px 15px 0;
  padding-right: 25px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75);
`;

const DeclarationStyled = styled.p`
  font-size: 1.5rem;
  padding-left: 1.5rem;
`;
const NumberedOutcomeStyled = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  align-self: flex-end;
`;

import styled from "styled-components";
import Link from "next/link";

const FormStyled = styled.form`
  width: 60%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;

  label {
    font-size: large;
    font-weight: 600;
  }
`;

const InputStyled = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: large;
  color: white;
  text-align: center;
`;

const DivStyled = styled.div`
  line-height: 1;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SelectStyled = styled.select`
  width: 100%;
  height: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: large;
  color: white;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  option {
    background-color: rgba(255, 255, 255, 0.4);
    text-align: center;
    color: white;
    background: rgba(0, 44, 72, 0.9);
    border: none;
  }
`;

const SaveBtnStyled = styled.button`
  border: 1px solid #555;
  background-color: #4bb44b;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 7px;
  text-decoration: none;
  padding: 10px;
  width: 120px;
`;

const LinkStyled = styled(Link)`
  text-align: center;
  color: white;
  font-weight: 500;
  border: 1px solid #555;
  background-color: #e04e1a;
  font-size: 1.2rem;
  border-radius: 7px;
  text-decoration: none;
  padding: 10px;
  width: 120px;
`;

const BtnDivStyled = styled.div`
  margin-top: 2em;
  display: flex;
  gap: 1rem;
  max-width: 100%;
`;

const DeleteButton = styled.button`
  border: 1px solid #555;
  background-color: red;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 7px;
  text-decoration: none;
  padding: 10px;
  width: 120px;
`;

export {
  FormStyled,
  LinkStyled,
  SaveBtnStyled,
  SelectStyled,
  InputStyled,
  DivStyled,
  BtnDivStyled,
  DeleteButton,
};

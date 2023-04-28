import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;
const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
`;

const ErrorMessageContainer = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

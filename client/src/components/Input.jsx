import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.5);
  }
`;
const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
`;

export default function Input({ label, name, value, onChange, type, error }) {
  return (
    <InputContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputField
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
}

import { GroupContainer, FormInputContainer } from "./form-input.styles";

const FormInput = ({ handleChange = () => {}, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
    </GroupContainer>
  );
};

export default FormInput;

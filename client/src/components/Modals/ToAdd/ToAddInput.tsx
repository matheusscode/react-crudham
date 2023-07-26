import { Input } from "@chakra-ui/react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputKey } from "../../../types";

interface ToAddInputProps {
  placeholder: string;
  type: string;
  name: keyof InputKey;
  inputState: InputKey;
  setInputState: Dispatch<SetStateAction<InputKey>>;
}

export default function ToAddInput({
  placeholder,
  type,
  inputState,
  name,
  setInputState,
}: ToAddInputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputState((prevInputState) => ({
      ...prevInputState,
      [name]: value,
    }));
  };

  return (
    <Input
      placeholder={placeholder}
      type={type}
      h="34px"
      p="1rem 0.2rem"
      borderBottom="2px solid #c0c0c0"
      variant="flushed"
      fontSize="0.9rem"
      value={inputState[name]}
      onChange={handleInputChange}
    />
  );
}

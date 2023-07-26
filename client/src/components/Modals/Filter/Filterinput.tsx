import { Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface FilterInputProps {
  placeholder: string;
  type: string;
  state?: string;
  setState?: Dispatch<SetStateAction<string>>;
}

export default function FilterInput({
  placeholder,
  setState,
  state,
  type,
}: FilterInputProps) {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={state}
      h="34px"
      p="1rem 0.2rem"
      borderBottom="2px solid #c0c0c0"
      variant="flushed"
      fontSize="0.9rem"
      onChange={(e) => setState(e.target.value)}
    />
  );
}

import { Dispatch, SetStateAction } from "react";

export type InputKey = {
  [key: string]: string;
};

export type InputComponentProps = {
  type: string;
  name: string;
  inputState: InputKey;
  setInputState: Dispatch<SetStateAction<InputKey>>;
};

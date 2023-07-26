import { Text } from "@chakra-ui/react";
import React from "react";

interface ToAddMessageProps {
  color?: string;
  text: string;
  size?: string;
}

export default function ToAddMessage({
  color,
  text,
  size,
}: ToAddMessageProps) {
  return (
    <Text
      color={color}
      fontSize={size}
      position="absolute"
      top="38px"
      left="34px"
      h="20px"
    >
      {text}
    </Text>
  );
}

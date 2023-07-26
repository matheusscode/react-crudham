import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ToAddContentProps {
  children: ReactNode;
}

export default function ToAddContent({ children }: ToAddContentProps) {
  return (
    <Flex alignItems="center" gap="0.6rem" position="relative" >
      {children}
    </Flex>
  );
}

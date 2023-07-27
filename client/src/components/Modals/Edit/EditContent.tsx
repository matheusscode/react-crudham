import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface EditContentProps {
  children: ReactNode;
}

export default function EditContent({ children }: EditContentProps) {
  return (
    <Flex alignItems="center" gap="0.6rem" position="relative" >
      {children}
    </Flex>
  );
}

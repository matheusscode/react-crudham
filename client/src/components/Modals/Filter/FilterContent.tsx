import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FilterContentProps {
  children: ReactNode;
}

export default function FilterContent({ children }: FilterContentProps) {
  return (
    <Flex alignItems="center" gap="0.6rem" position="relative" >
      {children}
    </Flex>
  );
}

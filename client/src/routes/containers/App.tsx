import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Outlet />
    </Flex>
  );
}

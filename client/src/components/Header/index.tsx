import { Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import logo from "../../../public/images/HAM-logo.svg";

export default function Header() {
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex w="100%" p={isLargerThan700 ? "0.6rem 0" : "1rem"}>
      <Flex
        maxW="1700px"
        w="100%"
        m="0 auto"
        justifyContent={isLargerThan700 ? "space-between" : "initial"}
        alignItems="center"
        gap="1rem"
      >
        <Image
          src={logo}
          alt="Hospital Adventista de Manaus - Logo marca"
          w={isLargerThan700 ? "80px" : "150px"}
          h={isLargerThan700 ? "40px" : "70px"}
        />
        <Heading as="h2" fontSize={isLargerThan700 ? "1rem" : "1.4rem"}>
          Hospital Adventista de Manaus
        </Heading>
      </Flex>
    </Flex>
  );
}

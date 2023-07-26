import {
  Flex,
  CircularProgress,
  Box,
  Input,
  Heading,
  Text,
  useMediaQuery,
  Divider,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header";
import FilterContent from "./FilterContent";
import AddContent from "./AddContent";
import TableContent from "./TableContent";
import type { OrderData } from "../../types";
import { useTable } from "../../context/TableContext";

export default function Dashboard() {
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  const { dataFetching, dataTable } = useTable();

  return (
    <Flex
      flexDirection="column"
      align-items="center"
      justifyContent="center"
      gap="2rem"
      p="0 2rem"
      maxW="1800px"
      w="100%"
    >
      <Header />
      {dataFetching && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%x)"
        >
          <CircularProgress isIndeterminate color="green.300" />
        </Box>
      )}
      <Heading
        as="h1"
        textAlign="center"
        fontSize={isLargerThan700 ? "1.6rem" : "2.4rem"}
        mb="2rem"
        color="#636363"
      >
        Painel de Controle
      </Heading>
      <Flex
        flexDirection="column"
        w="100%"
        gap={isLargerThan700 ? "1.6rem" : "1.4rem"}
      >
        <Flex
          w="100%"
          gap={isLargerThan700 ? "0.8rem" : "1rem"}
          flexDirection={isLargerThan700 ? "column" : "row"}
        >
          <InputGroup>
            <InputLeftElement
              children={<Icon fontSize="1.3rem" as={AiOutlineSearch} />}
            />
            <Input placeholder="Pesquisar" />
          </InputGroup>

          <Divider w={isLargerThan700 ? "0%" : "40%"} />
          <Flex>
            <AddContent />
          </Flex>
          <Flex>
            <FilterContent />
          </Flex>
        </Flex>
        <Text ml="0.4rem" fontWeight={600}>
          Filtros de busca:
        </Text>
      </Flex>

      {dataTable !== null && <TableContent dataTable={dataTable} />}

      <Text fontSize="0.9rem" textAlign="center" mt="5rem">
        Hospital Adventista de Manaus©
      </Text>
    </Flex>
  );
}

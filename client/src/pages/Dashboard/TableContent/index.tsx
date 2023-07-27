import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Link,
} from "@chakra-ui/react";
import { BsTrash3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Icon } from "@chakra-ui/icons";
import Description from "../../../components/Modals/Description";
import { useTable } from "../../../context/TableContext";
import EditContent from "../EditContent";

const tableThreads = [
  {
    id: 1,
    name: "CÓDIGO DA APLICAÇÃO",
  },
  {
    id: 2,
    name: "NOME DA APLICAÇÃO",
  },
  {
    id: 3,
    name: "DESCRIÇÃO DA APLICAÇÃO",
  },
  {
    id: 4,
    name: "NOME DO RESPONSÁVEL",
  },
  {
    id: 5,
    name: "NOME DA TECNOLOGIA",
  },
  {
    id: 6,
    name: "LINK DE ACESSO",
  },
  {
    id: 7,
    name: "DATA DE CRIAÇÃO",
  },
  {
    id: 8,
    name: "DATA DE ATUALIZAÇÃO",
  },
];

export default function TableContent() {
  const { handleDeleteApplication, dataTable } = useTable();

  const onDelete = (applicationId: string) => {
    handleDeleteApplication(applicationId);
  };

  return (
    <TableContainer
      w="100%"
      boxShadow="0 0 3px rgba(0,0,0,0.3)"
      borderRadius="12px"
      minH="400px"
      maxH="500px"
      overflowY="scroll"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            {tableThreads.map((thread) => (
              <Th key={thread.id} fontSize="0.7rem">
                {thread.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {dataTable &&
            dataTable.map((data, index) => (
              <Tr key={index}>
                <Td maxW="200px" fontSize="0.8rem">
                  {data.CD_APLICACAO}
                </Td>
                <Td maxW="200px" fontSize="0.8rem">
                  {data.NM_APLICACAO}
                </Td>
                <Td maxW="200px" fontSize="0.8rem">
                  <Description
                    buttonText="Ver descrição"
                    title={data.NM_APLICACAO}
                    content={data.DS_APLICACAO}
                  />
                </Td>
                <Td maxW="200px" fontSize="0.8rem">
                  {data.NM_RESPONSAVEL}
                </Td>
                <Td maxW="200px" fontSize="0.8rem">
                  {data.NM_TECNOLOGIA}
                </Td>
                <Td maxW="200px" fontSize="0.8rem">
                  <Link as={NavLink} to={`http://${data.DS_LINK_ACESSO}`}>
                    {data.DS_LINK_ACESSO}
                  </Link>
                </Td>
                <Td maxW="200px" fontSize="0.8rem">
                  {data.DT_ATUALIZACAO}
                </Td>
                <Td maxW="200px" fontSize="0.8rem">
                  {data.DT_ATUALIZACAO}
                </Td>
                <Td display="flex" gap="1rem">
                  <Button
                    onClick={() =>
                      data.CD_APLICACAO && onDelete(data.CD_APLICACAO)
                    }
                  >
                    <Icon as={BsTrash3} />
                  </Button>
                  <EditContent />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

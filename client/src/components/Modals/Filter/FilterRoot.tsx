import { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  Flex,
  ModalFooter,
} from "@chakra-ui/react";

interface FilterRootProps {
  children: ReactNode;
  title: string;
  buttonText: string;
}

export default function FilterRoot({
  title,
  buttonText,
  children,
}: FilterRootProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} w="100%" color="#ffffff" bgColor="#408080">
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m="auto 1rem">
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p="1rem"
          >
            <Heading fontSize="1.1rem">{title}</Heading>{" "}
            <ModalCloseButton fontSize="1.1rem" top="18px" />
          </ModalHeader>

          <ModalBody m="1rem auto 0" minH="500px" w="100%">
            <Flex flexDirection="column" w="100%" gap="2rem">
              {children}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button w="100%" color="#ffffff" bgColor="#408080" p="1rem">
              Buscar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

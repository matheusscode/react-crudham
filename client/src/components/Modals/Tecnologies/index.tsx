import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

interface TecnologiesProps {
  content: string;
  buttonText: string;
  title: string;
}

export default function Tecnologies({
  content,
  buttonText,
  title,
}: TecnologiesProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        textAlign="left"
        p="0"
        _hover={{ bgColor: "transparent" }}
        bgColor="transparent"
        fontSize="0.9rem"
      >
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m="auto 1rem">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{content}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

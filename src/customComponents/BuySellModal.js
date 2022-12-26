import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import CardBody from "components/Card/CardBody";

const BuySellModal = ({ data, bgCol, type, btnCol, heading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme={btnCol} width={"30%"} marginX={2}>
        {type}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose(), setIsBuying(false);
        }}
        size={"4xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }}>
              <SimpleGrid>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                >
                  <Image height={10} src={data?.image} />
                  <Text fontSize="lg">{data?.name}</Text>
                </Box>
              </SimpleGrid>
              <SimpleGrid>
                <Text align={"center"} fontSize="lg">
                  1,000,000 SAR
                </Text>
                <Text align={"center"} fontSize="sm">
                  {heading}
                </Text>
              </SimpleGrid>
            </SimpleGrid>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody backgroundColor={bgCol}>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }}>
              <SimpleGrid>
                <Input
                  placeholder="Company Selection"
                  size="md"
                  marginBottom={2}
                />
                <Input placeholder="Quantity" size="md" marginBottom={2} />
                <Input placeholder="Price" size="md" marginBottom={2} />
                <Input placeholder="Value" size="md" marginBottom={2} />
              </SimpleGrid>

              <SimpleGrid alignItems={"center"} justifyContent={"center"}>
                <Text fontSize="sm" align={"center"} color={"#3182CE"}>
                  Bulletin
                </Text>
                <CardBody>
                  <TableContainer
                    alignContent={"center"}
                    justifyContent={"center"}
                    margin={2}
                    width={"100%"}
                  >
                    <Text align={"center"} fontSize="sm" color={"#38A169"}>
                      Demand
                    </Text>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>P</Th>
                          <Th>Q</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                        <Tr>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                        <Tr>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <TableContainer margin={2} width={"100%"}>
                    <Text align={"center"} fontSize="sm" color={"#E53E3E"}>
                      Supply
                    </Text>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>P</Th>
                          <Th>Q</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                        <Tr>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                        <Tr>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </CardBody>
              </SimpleGrid>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter alignItems={"center"} justifyContent={"center"}>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button> */}
            <Button
              width={"30%"}
              color={btnCol}
              variant="solid"
              onClick={() => {
                setIsBuying(true);
              }}
            >
              {type}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BuySellModal;

import React from "react";
import {
  Box,
  Button,
  Divider,
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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
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
import SalesOverview from "views/Dashboard/Dashboard/components/SalesOverview";
import LineChart from "components/Charts/LineChart";
import Card from "components/Card/Card";
import BuySellModal from "./BuySellModal";
import { globalStyles } from "theme/styles";
import { InfoIcon } from "@chakra-ui/icons";
import { useTranslation } from "hooks";

const DetailsModal = ({ data, bgCol, type, btnCol, heading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const { locale } = useTranslation();

  let color = globalStyles.colors.gray;
  console.log(color);
  return (
    <div>
      <Button onClick={onOpen}>{t("details")}</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose(), setIsBuying(false);
        }}
        size={"6xl"}
        isCentered
      >
        <Flex style={{ direction: locale === "ar" ? "rtl" : "ltr" }}>
          <ModalOverlay
            style={{ direction: locale === "ar" ? "rtl" : "ltr" }}
          />
          <ModalContent>
            <ModalHeader>
              <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }}>
                <SimpleGrid>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Image
                      height={10}
                      src={data?.image}
                      mr={locale === "ar" ? 5 : 1}
                    />
                    <Text fontSize="lg">{data?.name}</Text>
                  </Box>
                  <SimpleGrid
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Text ml={12} fontSize="xs">
                      Financial
                    </Text>
                    <Popover>
                      <PopoverTrigger>
                        <InfoIcon w={4} h={4} ml={1} />
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        {/* <PopoverCloseButton /> */}
                        {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
                        <PopoverBody fontSize={"xs"}>
                          Every time you open a pull request, or push new
                          changes to a branch, Netlify automatically builds a
                          preview with a unique URL. Like a staging environment
                          for every PR or branch, previews are perfect for
                          testing and collaboration.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </SimpleGrid>
                </SimpleGrid>
                <SimpleGrid>
                  <Text align={"center"} fontSize="lg">
                    1,000,000 {t("SAR")}
                  </Text>

                  <Text align={"center"} fontSize="sm">
                    {heading}
                  </Text>
                </SimpleGrid>
                <SimpleGrid>
                  <Box display={"flex"} flexDirection={"row"}>
                    <BuySellModal
                      data={data}
                      bgCol={"#F0FFF4"}
                      type={t("buy")}
                      btnCol={"green"}
                      heading={t("buyingPower")}
                    />
                    <BuySellModal
                      data={data}
                      bgCol={"#FFF5F5"}
                      type={t("sell")}
                      btnCol={"red"}
                      heading={t("availQuantity")}
                    />
                  </Box>
                </SimpleGrid>
              </SimpleGrid>
            </ModalHeader>

            <ModalCloseButton />

            <ModalBody>
              <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }}>
                <SimpleGrid margin={1}>
                  <Card>
                    <Box>
                      <Box display={"flex"} flexDirection={"row"}>
                        <Text as="b" fontSize={"large"} mr={1}>
                          {t("overview")}
                        </Text>
                        <Text color={"gray.500"}>{t("past24hours")}</Text>
                      </Box>
                      <Box display={"flex"} flexDirection={"row"}>
                        <Text width={"50%"}>{t("NoOfTrades")}</Text>
                        <Text width={"50%"} align={"right"}>
                          58
                        </Text>
                      </Box>
                      <Divider orientation="horizontal" />
                      <Box display={"flex"} flexDirection={"row"}>
                        <Text width={"50%"}>{t("AvgOwnTransSize")}</Text>
                        <Text align={"right"} width={"50%"}>
                          95
                        </Text>
                      </Box>
                      <Divider orientation="horizontal" />
                      <Box display={"flex"} flexDirection={"row"}>
                        <Text width={"50%"}>{t("VolOwnTrans")}</Text>
                        <Text align={"right"} width={"50%"}>
                          592,214
                        </Text>
                      </Box>
                      <Divider orientation="horizontal" />
                      <Box display={"flex"} flexDirection={"row"}>
                        <Text width={"50%"}>{t("ValOwnsTrans")}</Text>
                        <Text align={"right"} width={"50%"}>
                          8,557,761
                        </Text>
                      </Box>
                      <Divider orientation="horizontal" />
                      <Box display={"flex"} flexDirection={"row"}>
                        <Text width={"50%"}>{t("high")}</Text>
                        <Text align={"right"} width={"50%"}>
                          16
                        </Text>
                      </Box>
                      <Divider orientation="horizontal" />
                      <Box display={"flex"} flexDirection={"row"}>
                        <Text width={"50%"}>{t("low")}</Text>
                        <Text align={"right"} width={"50%"}>
                          9
                        </Text>
                      </Box>
                      <Divider orientation="horizontal" />
                    </Box>
                  </Card>
                </SimpleGrid>

                <SimpleGrid margin={1}>
                  <SalesOverview
                    // title={t("performance")}
                    // percentage={5}
                    chart={<LineChart />}
                  />
                </SimpleGrid>
              </SimpleGrid>

              <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }}>
                <SimpleGrid margin={1}>
                  <Card>
                    <Text align={"center"} fontSize="sm" color={"#3182CE"}>
                      {t("bulletin")}
                    </Text>
                    <CardBody>
                      <TableContainer
                        alignContent={"center"}
                        justifyContent={"center"}
                        width={"100%"}
                      >
                        <Text align={"center"} fontSize="sm" color={"#38A169"}>
                          {t("demand")}
                        </Text>
                        <Table variant="striped" size={"sm"}>
                          <Thead>
                            <Tr>
                              <Th>{t("price")}</Th>
                              <Th>{t("quantity")}</Th>
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
                            <Tr>
                              <Td>498</Td>
                              <Td>533</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                      <TableContainer width={"100%"}>
                        <Text align={"center"} fontSize="sm" color={"#E53E3E"}>
                          {t("supply")}
                        </Text>
                        <Table variant="striped" size={"sm"}>
                          <Thead>
                            <Tr>
                              <Th>{t("price")}</Th>
                              <Th>{t("quantity")}</Th>
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
                            <Tr>
                              <Td>498</Td>
                              <Td>533</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </CardBody>
                  </Card>
                </SimpleGrid>

                <SimpleGrid margin={1}>
                  <Card>
                    <Text align={"center"} fontSize="sm" color={"#3182CE"}>
                      {t("marketHistory")}
                    </Text>
                    <CardBody alignContent={"center"} justifyContent={"center"}>
                      <TableContainer>
                        <Table variant="striped" mb={2} size={"sm"}>
                          <Thead>
                            <Tr>
                              <Th>{t("time")}</Th>
                              <Th>{t("price")}</Th>
                              <Th>{t("quantity")}</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>498</Td>
                              <Td>533</Td>
                              <Td>478</Td>
                            </Tr>
                            <Tr>
                              <Td>498</Td>
                              <Td>478</Td>
                              <Td>533</Td>
                            </Tr>

                            <Tr>
                              <Td>498</Td>
                              <Td>478</Td>
                              <Td>533</Td>
                            </Tr>

                            <Tr>
                              <Td>478</Td>
                              <Td>498</Td>
                              <Td>533</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </SimpleGrid>
            </ModalBody>

            <ModalFooter alignItems={"center"} justifyContent={"center"}>
              {/* <Button
              width={"30%"}
              color={btnCol}
              variant="solid"
              onClick={() => {
                setIsBuying(true);
              }}
            >
              Close
            </Button> */}
            </ModalFooter>
          </ModalContent>
        </Flex>
      </Modal>
    </div>
  );
};

export default DetailsModal;

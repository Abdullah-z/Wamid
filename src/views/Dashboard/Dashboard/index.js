// Chakra imports
import {
  Avatar,
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
  SimpleGrid,
  Text,
  useColorModeValue,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React, { useState } from "react";
import { dashboardTableData, timelineData } from "variables/general";
import PaymentStatistics from "../Billing/components/PaymentStatistics";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import { FaPaypal, FaWallet } from "react-icons/fa";
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
} from "@chakra-ui/react";
import data from "dummy/data";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useTranslation } from "../../../hooks/useTranslation";
import BuySellModal from "customComponents/BuySellModal";
import DetailsModal from "customComponents/DetailsModal";
import Notes from "components/Draggable/Notes";
import { DataState } from "hooks/DataContext";
import DataContext from "hooks/DataContext";
import { DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { modalData, setModalData } = DataState();
  const [isBuying, setIsBuying] = useState(false);
  const { locale } = useTranslation();
  const [isTableView, setIsTableView] = useState(false);
  console.log(modalData);

  const handleModal = function (x) {
    setModalData(x);
    console.log(modalData?.name);
    onOpen();
  };

  const { symbol, setSymbol } = DataState();
  console.log(symbol);

  return (
    <div>
      <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
        <Grid
          templateColumns={{ md: "1fr", lg: "2.5fr 1fr" }}
          templateRows={{ md: "1fr auto", lg: "1fr" }}
        >
          <SimpleGrid>
            <Tabs>
              <TabList>
                <Tab>Registerd Companies</Tab>
                {/* <Tab>Table View</Tab> */}
              </TabList>

              <TabPanels>
                <TabPanel>
                  {!isTableView ? (
                    <SimpleGrid
                      columns={{ sm: 1, md: 2, xl: 1 }}
                      spacing="24px"
                    >
                      <Notes />
                    </SimpleGrid>
                  ) : (
                    <SimpleGrid
                      columns={{ sm: 1, md: 2, xl: 1 }}
                      spacing="24px"
                    >
                      <Card>
                        <TableContainer>
                          <Table
                            variant="simple"
                            colorScheme="gray"
                            size={"sm"}
                          >
                            <Thead>
                              <Tr>
                                <Th>Companies</Th>
                                <Th>Price</Th>
                                <Th>% Change</Th>
                                <Th>Bid Qty.</Th>
                                <Th>Bid Price</Th>
                                <Th>Offer Qty.</Th>
                                <Th>Offer Price</Th>
                                <Th>Value</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {data.map((index) => {
                                return (
                                  <Tr onClick={() => handleModal(index)}>
                                    <Td>
                                      <Box
                                        display={"flex"}
                                        flexDirection={"row"}
                                      >
                                        <Image
                                          width={"5"}
                                          src={index.image}
                                          mr={1}
                                        />
                                        <Text> {index.name}</Text>
                                      </Box>
                                    </Td>
                                    <Td>{index.current_price}</Td>
                                    <Td>
                                      {index.price_change_percentage_24h.toFixed(
                                        2
                                      )}
                                    </Td>
                                    <Td
                                      color={"black"}
                                      backgroundColor={"green.100"}
                                    >
                                      {index.price_change_24h.toFixed(2)}
                                    </Td>
                                    <Td
                                      color={"black"}
                                      backgroundColor={"green.100"}
                                    >
                                      {index.current_price}
                                    </Td>
                                    <Td
                                      color={"black"}
                                      backgroundColor={"red.100"}
                                    >
                                      {index.price_change_percentage_24h.toFixed(
                                        2
                                      )}
                                    </Td>
                                    <Td
                                      color={"black"}
                                      backgroundColor={"red.100"}
                                    >
                                      {index.price_change_24h.toFixed(2)}
                                    </Td>
                                    <Td>{index.current_price}</Td>
                                  </Tr>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Card>
                    </SimpleGrid>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </SimpleGrid>

          <SimpleGrid columns={{ sm: 1, md: 2, xl: 1 }}>
            <Wrap>
              <WrapItem>
                <Avatar
                  onClick={() => setIsTableView(false)}
                  backgroundColor={isTableView ? "white" : "gray.300"}
                  size="sm"
                  icon={<DragHandleIcon />}
                  borderWidth={2}
                  borderColor={"grey"}
                />
              </WrapItem>
              <WrapItem>
                <Avatar
                  onClick={() => setIsTableView(true)}
                  backgroundColor={isTableView ? "gray.300" : "white"}
                  size="sm"
                  icon={<HamburgerIcon />}
                  borderWidth={2}
                  borderColor={"grey"}
                />
              </WrapItem>
            </Wrap>
            {modalData ? (
              <Card p="16px" display="flex" align="center" justify="center">
                <Box flexDirection={"row"} display={"flex"}>
                  <Text align={"left"} fontSize="xl" width={"50%"}>
                    {modalData?.name}
                  </Text>
                  <Box
                    width={"50%"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <DetailsModal data={modalData} />
                  </Box>
                </Box>
                <Box marginY={1} display={"flex"} justifyContent={"flex-start"}>
                  <Image height={10} src={modalData?.image} mr={1} />
                  <Divider orientation="vertical" />
                  <Text align="left">
                    Bitcoin is the first successful internet money based on
                    peer-to-peer technology.
                  </Text>
                </Box>

                <Text fontSize="sm" color={"#3182CE"}>
                  Bulletin
                </Text>
                <CardBody>
                  <TableContainer
                    alignContent={"center"}
                    justifyContent={"center"}
                    width={"100%"}
                  >
                    <Text fontSize="sm" color={"#38A169"}>
                      Demand
                    </Text>
                    <Table variant="striped" size={"sm"}>
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
                        <Tr>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <TableContainer width={"100%"}>
                    <Text fontSize="sm" color={"#E53E3E"}>
                      Supply
                    </Text>
                    <Table variant="striped" size={"sm"}>
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
                        <Tr>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </CardBody>
                <Text fontSize="sm" color={"#3182CE"} marginTop={2}>
                  Market History
                </Text>
                <CardBody>
                  <TableContainer
                    alignContent={"center"}
                    justifyContent={"center"}
                    width={"100%"}
                  >
                    <Table variant="striped" mb={2} size={"sm"}>
                      <Thead>
                        <Tr>
                          <Th>Time</Th>
                          <Th>Price (SAR)</Th>
                          <Th>Quantity</Th>
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
                          <Td>478</Td>
                          <Td>498</Td>
                          <Td>533</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </CardBody>
                <div>
                  <BuySellModal
                    data={modalData}
                    bgCol={"green.100"}
                    type={"Buy"}
                    btnCol={"green"}
                    heading={"Buying Power"}
                  />
                  <BuySellModal
                    data={modalData}
                    bgCol={"red.100"}
                    type={"Sell"}
                    btnCol={"red"}
                    heading={"Available Quantity"}
                  />
                </div>
              </Card>
            ) : (
              <></>
            )}
          </SimpleGrid>
        </Grid>
        {/* <Grid
          templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
          templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
          gap="24px"
          mb={{ lg: "26px" }}
        >
          <ActiveUsers
            title={"Active Users"}
            percentage={23}
            chart={<BarChart />}
          />
          <SalesOverview
            title={"Sales Overview"}
            percentage={5}
            chart={<LineChart />}
          />
        </Grid> */}
        {/* <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap="24px"
        >
          <Projects
          title={"Projects"}
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={dashboardTableData}
        />

 

          <OrdersOverview
            title={"Orders Overview"}
            amount={30}
            data={timelineData}
          />
        </Grid> */}
      </Flex>
    </div>
  );
}

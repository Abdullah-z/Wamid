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
import React, { useState, useEffect } from "react";
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
import { AddIcon, DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Separator } from "components/Separator/Separator";
import WebsocketHeartbeatJs from "websocket-heartbeat-js";
import axios from "axios";
import { set } from "lodash";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { modalData, setModalData } = DataState();
  const [isBuying, setIsBuying] = useState(false);
  const { locale } = useTranslation();
  const [isTableView, setIsTableView] = useState(false);
  const [dyna, setDyna] = useState([
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      current_price: 17080.44,
      market_cap: 328431688390,
      market_cap_rank: 1,
      fully_diluted_valuation: 358820485806,
      total_volume: 24873058095,
      high_24h: 17249.92,
      low_24h: 16756.04,
      price_change_24h: 140.24,
      price_change_percentage_24h: 0.82783,
      market_cap_change_24h: 3599318967,
      market_cap_change_percentage_24h: 1.10805,
      circulating_supply: 19221493,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 69045,
      ath_change_percentage: -75.25274,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl: 67.81,
      atl_change_percentage: 25098.26247,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2022-12-01T08:25:28.826Z",
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      current_price: 1280.75,
      market_cap: 154385816126,
      market_cap_rank: 2,
      fully_diluted_valuation: 154385816126,
      total_volume: 8354911790,
      high_24h: 1307.45,
      low_24h: 1263.19,
      price_change_24h: 5.86,
      price_change_percentage_24h: 0.45959,
      market_cap_change_24h: 761813214,
      market_cap_change_percentage_24h: 0.49589,
      circulating_supply: 120520589.92788,
      total_supply: 120520589.92788,
      max_supply: null,
      ath: 4878.26,
      ath_change_percentage: -73.7408,
      ath_date: "2021-11-10T14:24:19.604Z",
      atl: 0.432979,
      atl_change_percentage: 295755.54834,
      atl_date: "2015-10-20T00:00:00.000Z",
      roi: {
        times: 99.24004619775661,
        currency: "btc",
        percentage: 9924.004619775662,
      },
      last_updated: "2022-12-01T08:25:22.026Z",
    },
    {
      id: "tether",
      symbol: "usdt",
      name: "Tether",
      image:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
      current_price: 0.999998,
      market_cap: 65389194199,
      market_cap_rank: 3,
      fully_diluted_valuation: 65389194199,
      total_volume: 36606278941,
      high_24h: 1.012,
      low_24h: 0.999238,
      price_change_24h: -0.002468105728183012,
      price_change_percentage_24h: -0.2462,
      market_cap_change_24h: 36718715,
      market_cap_change_percentage_24h: 0.05619,
      circulating_supply: 65362681003.3144,
      total_supply: 65362681003.3144,
      max_supply: null,
      ath: 1.32,
      ath_change_percentage: -24.38996,
      ath_date: "2018-07-24T00:00:00.000Z",
      atl: 0.572521,
      atl_change_percentage: 74.7347,
      atl_date: "2015-03-02T00:00:00.000Z",
      roi: null,
      last_updated: "2022-12-01T08:25:44.423Z",
    },
    {
      id: "binancecoin",
      symbol: "bnb",
      name: "BNB",
      image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
      current_price: 298.29,
      market_cap: 48711550099,
      market_cap_rank: 4,
      fully_diluted_valuation: 59667384467,
      total_volume: 750033666,
      high_24h: 302.12,
      low_24h: 294.64,
      price_change_24h: -2.8088705701641175,
      price_change_percentage_24h: -0.93286,
      market_cap_change_24h: -449628142.0374832,
      market_cap_change_percentage_24h: -0.9146,
      circulating_supply: 163276974.63,
      total_supply: 163276974.63,
      max_supply: 200000000,
      ath: 686.31,
      ath_change_percentage: -56.53008,
      ath_date: "2021-05-10T07:24:17.097Z",
      atl: 0.0398177,
      atl_change_percentage: 749157.09773,
      atl_date: "2017-10-19T00:00:00.000Z",
      roi: null,
      last_updated: "2022-12-01T08:25:17.580Z",
    },
    {
      id: "usd-coin",
      symbol: "usdc",
      name: "USD Coin",
      image:
        "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
      current_price: 1.001,
      market_cap: 43307545620,
      market_cap_rank: 5,
      fully_diluted_valuation: 43304697419,
      total_volume: 2542860686,
      high_24h: 1.005,
      low_24h: 0.998276,
      price_change_24h: 0.00089776,
      price_change_percentage_24h: 0.08975,
      market_cap_change_24h: -41742291.66793823,
      market_cap_change_percentage_24h: -0.09629,
      circulating_supply: 43247012244.7593,
      total_supply: 43244168024.7293,
      max_supply: null,
      ath: 1.17,
      ath_change_percentage: -14.60778,
      ath_date: "2019-05-08T00:40:28.300Z",
      atl: 0.891848,
      atl_change_percentage: 12.28369,
      atl_date: "2021-05-19T13:14:05.611Z",
      roi: null,
      last_updated: "2022-12-01T08:24:55.532Z",
    },
    {
      id: "binance-usd",
      symbol: "busd",
      name: "Binance USD",
      image:
        "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766",
      current_price: 0.999148,
      market_cap: 22243235372,
      market_cap_rank: 6,
      fully_diluted_valuation: 22243235372,
      total_volume: 8916790090,
      high_24h: 1.021,
      low_24h: 0.996679,
      price_change_24h: -0.003875081552783266,
      price_change_percentage_24h: -0.38634,
      market_cap_change_24h: 64103791,
      market_cap_change_percentage_24h: 0.28903,
      circulating_supply: 22262030911.99,
      total_supply: 22262030911.99,
      max_supply: null,
      ath: 1.15,
      ath_change_percentage: -13.43335,
      ath_date: "2020-03-13T02:35:42.953Z",
      atl: 0.901127,
      atl_change_percentage: 10.87843,
      atl_date: "2021-05-19T13:04:37.445Z",
      roi: null,
      last_updated: "2022-12-01T08:25:29.772Z",
    },
    {
      id: "ripple",
      symbol: "xrp",
      name: "XRP",
      image:
        "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
      current_price: 0.402008,
      market_cap: 20217261802,
      market_cap_rank: 7,
      fully_diluted_valuation: 40201332828,
      total_volume: 988897826,
      high_24h: 0.414044,
      low_24h: 0.396424,
      price_change_24h: -0.003272837796074124,
      price_change_percentage_24h: -0.80755,
      market_cap_change_24h: -157040358.96458054,
      market_cap_change_percentage_24h: -0.77078,
      circulating_supply: 50290028663,
      total_supply: 99989207174,
      max_supply: 100000000000,
      ath: 3.4,
      ath_change_percentage: -88.17163,
      ath_date: "2018-01-07T00:00:00.000Z",
      atl: 0.00268621,
      atl_change_percentage: 14864.64018,
      atl_date: "2014-05-22T00:00:00.000Z",
      roi: null,
      last_updated: "2022-12-01T08:25:25.723Z",
    },
    {
      id: "dogecoin",
      symbol: "doge",
      name: "Dogecoin",
      image:
        "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
      current_price: 0.103248,
      market_cap: 14160200706,
      market_cap_rank: 8,
      fully_diluted_valuation: null,
      total_volume: 1551593306,
      high_24h: 0.108499,
      low_24h: 0.101304,
      price_change_24h: -0.003663596233612426,
      price_change_percentage_24h: -3.42677,
      market_cap_change_24h: -493910573.3193073,
      market_cap_change_percentage_24h: -3.37046,
      circulating_supply: 137122646383.705,
      total_supply: null,
      max_supply: null,
      ath: 0.731578,
      ath_change_percentage: -85.88435,
      ath_date: "2021-05-08T05:08:23.458Z",
      atl: 0.0000869,
      atl_change_percentage: 118729.15492,
      atl_date: "2015-05-06T00:00:00.000Z",
      roi: null,
      last_updated: "2022-12-01T08:25:19.731Z",
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image:
        "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
      current_price: 0.315698,
      market_cap: 11068273517,
      market_cap_rank: 9,
      fully_diluted_valuation: 14212355892,
      total_volume: 235152253,
      high_24h: 0.321982,
      low_24h: 0.311089,
      price_change_24h: -0.000242557714761449,
      price_change_percentage_24h: -0.07677,
      market_cap_change_24h: -6635677.497493744,
      market_cap_change_percentage_24h: -0.05992,
      circulating_supply: 35045020830.3234,
      total_supply: 45000000000,
      max_supply: 45000000000,
      ath: 3.09,
      ath_change_percentage: -89.76917,
      ath_date: "2021-09-02T06:00:10.474Z",
      atl: 0.01925275,
      atl_change_percentage: 1540.37202,
      atl_date: "2020-03-13T02:22:55.044Z",
      roi: null,
      last_updated: "2022-12-01T08:25:17.815Z",
    },
    {
      id: "matic-network",
      symbol: "matic",
      name: "Polygon",
      image:
        "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
      current_price: 0.919096,
      market_cap: 8150883266,
      market_cap_rank: 10,
      fully_diluted_valuation: 9190575698,
      total_volume: 601948400,
      high_24h: 0.942629,
      low_24h: 0.867641,
      price_change_24h: 0.04331991,
      price_change_percentage_24h: 4.94646,
      market_cap_change_24h: 394543720,
      market_cap_change_percentage_24h: 5.08673,
      circulating_supply: 8868740690.28493,
      total_supply: 10000000000,
      max_supply: 10000000000,
      ath: 2.92,
      ath_change_percentage: -68.48512,
      ath_date: "2021-12-27T02:08:34.307Z",
      atl: 0.00314376,
      atl_change_percentage: 29134.31492,
      atl_date: "2019-05-10T00:00:00.000Z",
      roi: {
        times: 348.46632533656526,
        currency: "usd",
        percentage: 34846.63253365653,
      },
      last_updated: "2022-12-01T08:25:14.097Z",
    },
    {
      id: "polkadot",
      symbol: "dot",
      name: "Polkadot",
      image:
        "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
      current_price: 5.38,
      market_cap: 6324106338,
      market_cap_rank: 11,
      fully_diluted_valuation: 6759576276,
      total_volume: 182597248,
      high_24h: 5.5,
      low_24h: 5.33,
      price_change_24h: -0.055092463183800795,
      price_change_percentage_24h: -1.01438,
      market_cap_change_24h: -59627441.5635376,
      market_cap_change_percentage_24h: -0.93405,
      circulating_supply: 1175582688.32585,
      total_supply: 1256531820.58925,
      max_supply: null,
      ath: 54.98,
      ath_change_percentage: -90.21909,
      ath_date: "2021-11-04T14:10:09.301Z",
      atl: 2.7,
      atl_change_percentage: 99.35951,
      atl_date: "2020-08-20T05:48:11.359Z",
      roi: null,
      last_updated: "2022-12-01T08:25:34.913Z",
    },
  ]);
  const [sortCol, setSortCol] = useState("current_price");
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const updateState = (id, price) => {
    const newState = dyna?.map((obj) => {
      if (obj?.id === id) {
        obj["current_price"] = price;
      }
      return obj;
    });

    setDyna(newState);
  };

  useEffect(() => {
    loading === false;
    let websocketHeartbeatJs = new WebsocketHeartbeatJs({
      url: "ws://172.16.2.201:7000/api/stream",
    });
    websocketHeartbeatJs.onopen = function () {
      console.log("connect success");
      websocketHeartbeatJs.send("hello server");
    };
    websocketHeartbeatJs.onmessage = function (e) {
      let pdata = JSON.parse(e?.data);
      let newdata = JSON.parse(pdata?.data);

      updateState(newdata.id, newdata.current_price);
    };
    websocketHeartbeatJs.onreconnect = function () {
      console.log("reconnecting...");
    };
  }, []);

  return (
    <div style={{ direction: locale === "ar" ? "rtl" : "ltr" }}>
      <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
        <Tabs>
          <TabList>
            <Tab>{t("registeredCompanies")}</Tab>
            <Tab>{t("portfolio")}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns={{ md: "1fr", lg: "2.5fr 1fr" }}
                templateRows={{ md: "1fr auto", lg: "1fr" }}
              >
                {!isTableView ? (
                  <>
                    <SimpleGrid
                      columns={{ sm: 1, md: 2, xl: 5 }}
                      spacing="24px"
                    >
                      {dyna?.map((index, id) => {
                        return (
                          <div onClick={() => setModalData(index)} key={id}>
                            <PaymentStatistics
                              title={index.name}
                              icon={index.image}
                              amount={index.current_price.toFixed(2)}
                              change={index.price_change_percentage_24h}
                            />
                          </div>
                        );
                      })}

                      {/* <Notes /> */}
                      <Card
                        justifyContent="center"
                        alignitems="center"
                        boxShadow="lg"
                      >
                        <Box display={"flex"} justifyContent={"center"}>
                          <AddIcon justifyContent={"center"} boxSize={10} />
                        </Box>
                      </Card>
                    </SimpleGrid>
                  </>
                ) : (
                  <SimpleGrid columns={{ sm: 1, md: 2, xl: 1 }} spacing="24px">
                    <Card>
                      <TableContainer>
                        <Table variant="simple" colorScheme="gray" size={"sm"}>
                          <Thead>
                            <Tr>
                              <Th color={"blue.500"}>{t("companies")}</Th>
                              <Th
                                color={"blue.500"}
                                onClick={() => setSortCol("current_price")}
                              >
                                {t("price")}
                              </Th>
                              <Th
                                color={"blue.500"}
                                onClick={() =>
                                  setSortCol("price_change_percentage_24h")
                                }
                              >
                                % {t("change")}
                              </Th>
                              <Th color={"blue.500"}>{t("bidQty")}</Th>
                              <Th color={"blue.500"}>{t("bidPrice")}</Th>
                              <Th color={"blue.500"}>{t("offerQty")}</Th>
                              <Th color={"blue.500"}>{t("offerPrice")}</Th>
                              <Th color={"blue.500"}>{t("value")}</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {dyna?.map((index) => {
                              return (
                                <Tr onClick={() => setModalData(index)}>
                                  <Td>
                                    <Box display={"flex"} flexDirection={"row"}>
                                      <Image
                                        width={"5"}
                                        src={index.image}
                                        mr={1}
                                      />
                                      <Text> {index.name}</Text>
                                    </Box>
                                  </Td>
                                  <Td>{index.current_price.toFixed(2)}</Td>
                                  <Td
                                    color={
                                      index.price_change_percentage_24h > 0
                                        ? "green.500"
                                        : "red.500"
                                    }
                                  >
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
                                    color={"green.500"}
                                    backgroundColor={"green.100"}
                                  >
                                    {index.current_price.toFixed(2)}
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
                                    color={"red.500"}
                                    backgroundColor={"red.100"}
                                  >
                                    {index.price_change_24h.toFixed(2)}
                                  </Td>
                                  <Td>{index.current_price.toFixed(2)}</Td>
                                </Tr>
                              );
                            })}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </SimpleGrid>
                )}
                <SimpleGrid columns={{ sm: 1, md: 2, xl: 1 }}>
                  <Wrap justifyContent={"right"} display={"flex"}>
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
                    <Box minWidth={"100%"} marginX={5}>
                      <Card
                        p="16px"
                        display="flex"
                        align="center"
                        justify="center"
                      >
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
                        <Box
                          marginY={1}
                          display={"flex"}
                          justifyContent={"flex-start"}
                        >
                          <Image height={10} src={modalData?.image} mr={1} />
                          <Divider orientation="vertical" />
                          <Text align="left" fontSize="sm">
                            Bitcoin is the first successful internet money based
                            on peer-to-peer technology.
                          </Text>
                        </Box>
                        <Divider orientation="horizontal" />
                        <Text fontSize="sm" color={"#3182CE"}>
                          {t("bulletin")}
                        </Text>
                        <Divider orientation="horizontal" />
                        <CardBody>
                          <TableContainer
                            alignContent={"center"}
                            justifyContent={"center"}
                            width={"100%"}
                          >
                            <Text fontSize="sm" color={"#38A169"}>
                              {t("demand")}
                            </Text>
                            <Table variant="striped" size={"sm"}>
                              <Thead>
                                <Tr>
                                  <Th>{t("p")}</Th>
                                  <Th>{t("q")}</Th>
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
                              {t("supply")}
                            </Text>
                            <Table variant="striped" size={"sm"}>
                              <Thead>
                                <Tr>
                                  <Th>{t("p")}</Th>
                                  <Th>{t("q")}</Th>
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
                          {t("marketHistory")}
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
                                  <Th>{t("time")}</Th>
                                  <Th>{t("price")} </Th>
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
                            bgCol={"green.50"}
                            type={t("buy")}
                            btnCol={"green"}
                            heading={t("buyingPower")}
                          />
                          <BuySellModal
                            data={modalData}
                            bgCol={"red.50"}
                            type={t("sell")}
                            btnCol={"red"}
                            heading={t("availQuantity")}
                          />
                        </div>
                      </Card>
                    </Box>
                  ) : (
                    <></>
                  )}
                </SimpleGrid>
              </Grid>
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>

        <SimpleGrid></SimpleGrid>

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

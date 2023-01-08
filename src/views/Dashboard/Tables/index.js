// Chakra imports
import {
  Box,
  Divider,
  Flex,
  Grid,
  Image,
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
} from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";
import MiniStatistics from "../Dashboard/components/MiniStatistics";
import { WalletIcon } from "components/Icons/Icons";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { BsGraphUp, BsPieChart } from "react-icons/bs";
import OrdersOverview from "../Dashboard/components/OrdersOverview";
import { timelineData } from "variables/general";
import SalesOverview from "../Dashboard/components/SalesOverview";
import LineChart from "components/Charts/LineChart";
import BarChart from "components/Charts/BarChart";
import PieChart from "customComponents/PieChart";
import { useTranslation } from "hooks";

function Tables() {
  const iconBoxInside = useColorModeValue("white", "white");
  const { t } = useTranslation();
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ md: "1fr", lg: "2fr 1fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      >
        <Box>
          <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }} spacing="24px">
            <MiniStatistics
              title={t("totalCash")}
              amount={"$53,000"}
              percentage={55}
              icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
            <MiniStatistics
              title={t("holding")}
              amount={"$53,000"}
              percentage={55}
              icon={<BsPieChart h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
            <MiniStatistics
              title={t("gainLoss")}
              amount={"$53,000"}
              percentage={55}
              icon={<BsGraphUp h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
          </SimpleGrid>
          <Grid
            templateColumns={{ md: "1fr", lg: "2fr 1fr" }}
            templateRows={{ md: "1fr auto", lg: "1fr" }}
            my="26px"
            gap="24px"
          >
            <SalesOverview
              title={"Sales Overview"}
              percentage={5}
              chart={<LineChart />}
            />
            <SalesOverview
              title={"Sales Overview"}
              percentage={5}
              chart={<PieChart />}
            />
          </Grid>
        </Box>

        <SimpleGrid columns={{ sm: 1, md: 2, xl: 1 }}>
          <OrdersOverview
            title={t("Notifications")}
            amount={30}
            data={timelineData}
          />
        </SimpleGrid>
      </Grid>
      <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }}>
        <Box marginX={2}>
          <Card>
            <Text align={"center"} fontSize="sm" color={"#3182CE"}>
              {t("pendingTransactions")}
            </Text>
            <CardBody>
              <TableContainer
                alignContent={"center"}
                justifyContent={"center"}
                width={"100%"}
              >
                <Table variant="striped" size={"sm"}>
                  <Thead>
                    <Tr>
                      <Th> {t("company")}</Th>
                      <Th> {t("price")}</Th>
                      <Th> {t("quantity")}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>FranchiseMe</Td>
                      <Td>45</Td>
                      <Td>583</Td>
                    </Tr>
                    <Tr>
                      <Td>S-watch</Td>
                      <Td>21</Td>
                      <Td>895</Td>
                    </Tr>
                    <Tr>
                      <Td>InDriver</Td>
                      <Td>36</Td>
                      <Td>533</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </Box>
        <Box marginX={2}>
          <Card>
            <Text align={"center"} fontSize="sm" color={"#3182CE"}>
              {t("holding")}
            </Text>
            <CardBody>
              <TableContainer
                alignContent={"center"}
                justifyContent={"center"}
                width={"100%"}
              >
                <Table variant="striped" size={"sm"}>
                  <Thead>
                    <Tr>
                      <Th> {t("company")}</Th>
                      <Th> {t("quantity")}</Th>
                      <Th> {t("volume")}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>FranchiseMe</Td>
                      <Td>498</Td>
                      <Td>533</Td>
                    </Tr>
                    <Tr>
                      <Td>S-watch</Td>
                      <Td>498</Td>
                      <Td>533</Td>
                    </Tr>
                    <Tr>
                      <Td>InDriver</Td>
                      <Td>498</Td>
                      <Td>533</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </Box>
        <Box marginX={2}>
          <Card>
            <Text align={"center"} fontSize="sm" color={"#3182CE"}>
              {t("cashStatement")}
            </Text>
            <CardBody>
              <TableContainer
                alignContent={"center"}
                justifyContent={"center"}
                width={"100%"}
              >
                <Table variant="striped" size={"sm"}>
                  <Thead>
                    <Tr>
                      <Th> {t("date")}</Th>
                      <Th> {t("amount")}</Th>
                      <Th> {t("remainingBalance")}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>498</Td>
                      <Td>533</Td>
                      <Td>564</Td>
                    </Tr>
                    <Tr>
                      <Td>498</Td>
                      <Td>533</Td>
                      <Td>489</Td>
                    </Tr>
                    <Tr>
                      <Td>498</Td>
                      <Td>759</Td>
                      <Td>533</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default Tables;

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

function Tables() {
  const iconBoxInside = useColorModeValue("white", "white");
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
              title={"Total Cash"}
              amount={"$53,000"}
              percentage={55}
              icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
            <MiniStatistics
              title={"Holding"}
              amount={"$53,000"}
              percentage={55}
              icon={<BsPieChart h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
            <MiniStatistics
              title={"Gain/Loss"}
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
            title={"Notifications"}
            amount={30}
            data={timelineData}
          />
        </SimpleGrid>
      </Grid>
      <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }}>
        <Box marginX={2}>
          <Card>
            <Text align={"center"} fontSize="sm" color={"#3182CE"}>
              Bulletin
            </Text>
            <CardBody>
              <TableContainer
                alignContent={"center"}
                justifyContent={"center"}
                width={"100%"}
              >
                <Text align={"center"} fontSize="sm" color={"#38A169"}>
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
                <Text align={"center"} fontSize="sm" color={"#E53E3E"}>
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
          </Card>
        </Box>
        <Box marginX={2}>
          <Card>
            <Text align={"center"} fontSize="sm" color={"#3182CE"}>
              Bulletin
            </Text>
            <CardBody>
              <TableContainer
                alignContent={"center"}
                justifyContent={"center"}
                width={"100%"}
              >
                <Text align={"center"} fontSize="sm" color={"#38A169"}>
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
                <Text align={"center"} fontSize="sm" color={"#E53E3E"}>
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
          </Card>
        </Box>
        <Box marginX={2}>
          <Card>
            <Text align={"center"} fontSize="sm" color={"#3182CE"}>
              Bulletin
            </Text>
            <CardBody>
              <TableContainer
                alignContent={"center"}
                justifyContent={"center"}
                width={"100%"}
              >
                <Text align={"center"} fontSize="sm" color={"#38A169"}>
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
                <Text align={"center"} fontSize="sm" color={"#E53E3E"}>
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
          </Card>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default Tables;
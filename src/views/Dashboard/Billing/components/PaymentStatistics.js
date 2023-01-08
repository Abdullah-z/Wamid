// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
// import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import { Separator } from "components/Separator/Separator";
import React from "react";
import { Image } from "@chakra-ui/react";
import Card from "components/Card/Card";

const PaymentStatistics = ({
  icon,
  title,
  description,
  amount,
  DynamicColor,
  change,
}) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card backgroundColor={change > 0 ? "green.100" : "red.100"} boxShadow="lg">
      <Box>
        <Box>
          <Text fontSize="sm" color={"black"}>
            {title}
          </Text>
        </Box>
        <Flex direction="column" align="center" w="100%" height={"100%"}>
          <Image height={10} width={10} mt={3} src={icon} alt="" />

          <Flex
            direction="column"
            justify="center"
            textAlign="center"
            align="center"
            w="100%"
          >
            <Text mb="24px" fontSize="xs" color="gray.400">
              {description}
            </Text>
            <Separator />
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Text fontSize="sm" color={change > 0 ? "green.500" : "red.500"}>
          {`$${amount}`}
        </Text>
        <Text fontSize="sm" color={change > 0 ? "green.500" : "red.500"}>
          {(change * 100).toFixed(2)}%
        </Text>
      </Box>
    </Card>
  );
};

export default PaymentStatistics;

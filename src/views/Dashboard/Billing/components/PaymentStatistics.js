// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import { Separator } from "components/Separator/Separator";
import React from "react";
import { Image } from "@chakra-ui/react";

const PaymentStatistics = ({
  icon,
  title,
  description,
  amount,
  DynamicColor,
}) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card display="flex" align="center" justify="center">
      <CardBody>
        <Flex direction="column" align="center" w="100%" height={"100%"}>
          {/* <IconBox as='box' h={"60px"} w={"60px"} bg={iconTeal}>
            {icon}
          </IconBox> */}

          <Image height={10} width={10} src={icon} alt="" />

          <Flex
            direction="column"
            justify="center"
            textAlign="center"
            align="center"
            w="100%"
          >
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {title}
            </Text>
            <Text
              mb="24px"
              fontSize="xs"
              color="gray.400"
              fontWeight="semibold"
            >
              {description}
            </Text>
            <Separator />
          </Flex>
          <Text fontSize="lg" color={DynamicColor} fontWeight="bold">
            {`$${amount}`}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PaymentStatistics;

import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Separator } from "components/Separator/Separator";
import { Image } from "@chakra-ui/react";
import { DataState } from "hooks/DataContext";

function Note(props) {
  const { modalData, setModalData } = DataState();
  return (
    <div
      height={props.node.height}
      className="note"
      id={props.node.id}
      style={{ height: "100%" }}
      {...props.draggableItem}
      onClick={() => setModalData(props.data)}
    >
      <Card backgroundColor={props.change > 0 ? "green.100" : "red.100"}>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Image height={10} width={10} src={props.icon} alt="" />
          {/* <Text size="sm">{props.title}</Text> */}
          <Text size="sm" color={"black"}>
            {props.description}
          </Text>
          <Text size="sm" color={props.change > 0 ? "#38A169" : "#E53E3E"}>
            ${props.amount}
          </Text>
        </Box>
      </Card>
    </div>
  );
}

export default Note;

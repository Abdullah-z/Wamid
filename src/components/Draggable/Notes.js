import React, { useState } from "react";
import Note from "./Note";
import Draggable from "./Draggable";
import DraggableMasonryLayout from "./DraggableMasonryLayout";
import data from "dummy/data";

import "./styles.css";
import PaymentStatistics from "views/Dashboard/Billing/components/PaymentStatistics";
import { SimpleGrid } from "@chakra-ui/react";
const maxHeight = 200;
const minHeight = 100;
const randomHeight = () =>
  Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);

console.log(data);

const nodes = [
  { id: "1", content: "one" },
  { id: "2", content: "two" },
  { id: "3", content: "three" },
  { id: "4", content: "four" },
  { id: "5", content: "five" },
  { id: "6", content: "six" },
  { id: "7", content: "seven" },
  { id: "8", content: "eight" },
  { id: "9", content: "nine" },
  { id: "10", content: "ten" },
  { id: "11", content: "eleven" },
  { id: "12", content: "twelve" },
  { id: "13", content: "thirteen" },
  { id: "14", content: "fourteen" },
  { id: "15", content: "fifteen" },
  { id: "16", content: "sixteen" },
  { id: "17", content: "seventeen" },
];

function Notes() {
  const [amount, setAmount] = useState(5);

  const notes = data.map((node, index) => (
    <Note
      icon={node.image}
      title={node.symbol}
      description={node.name}
      amount={node.current_price.toFixed(2)}
      key={node.id}
      node={node}
      index={index}
      change={node.price_change_percentage_24h}
      data={node}
    ></Note>
  ));

  return (
    <div className="App">
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }}>
        <DraggableMasonryLayout>{notes}</DraggableMasonryLayout>
      </SimpleGrid>
    </div>
  );
}

export default Notes;

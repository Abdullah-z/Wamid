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
      <DraggableMasonryLayout>{notes}</DraggableMasonryLayout>
    </div>
  );
}

export default Notes;

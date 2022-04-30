import React, { useState, useRef } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import useDragScroll from "use-drag-scroll";
import { Section } from "./Style";


const ITEMS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

export default function App({data}) {
  const [order, setOrder] = useState("ASC");

  const orderedItems = order === "ASC" ? ITEMS : [...ITEMS].reverse();

  const ref = useRef(null);

  useDragScroll({
    sliderRef: ref
  });

  return (
    <Section>
      <button
        onClick={() => {
          if (order === "ASC") {
            setOrder("DESC");
          } else {
            setOrder("ASC");
          }
        }}
      >
        Change order
      </button>{" "}
      Current order: {order}
      <HorizontalScroll    
      reverseScroll={true}
      style={{width: `60em`, height: `1000px` }}  >
      <div className="Wrapper" ref={ref}>
        {orderedItems.map(ITEM => (
          <div key={ITEM} className="item">
            <h1>{ITEM}</h1>
          </div>
        ))}
      </div>
      </HorizontalScroll>
    </Section>
  );
}

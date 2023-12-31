import React from "react";
import { keyframes } from "@emotion/core";

export default ({ items, color }) => (
  <span
    style={{
      "& span": {
        animation: `${topToBottom} 5s easeIn infinite 5s`,
        opacity: 0
      }
    }}
  >
    {items.map(item => (
      <span key={item} css={{ color }}>
        {item}
      </span>
    ))}
  </span>
);

const topToBottom = keyframes({
  "0%": {
    opacity: 0
  },
  "6%": {
    opacity: 0
  },
  "21%": {
    opacity: 1
  },
  "69%": {
    opacity: 1
  },
  "84%": {
    opacity: 0
  },
  "90%": {
    opacity: 0
  },
  "100%": {
    opacity: 0
  }
});

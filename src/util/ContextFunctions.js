import { useState } from "react";

let obj = [
  {
    windowSize: 2380,
    type: "desktop",
    count: 6,
  },
  {
    windowSize: 2160,
    type: "desktop",
    count: 5,
  },
  {
    windowSize: 2000,
    type: "desktop",
    count: 4,
  },
  {
    windowSize: 1720,
    type: "desktop",
    count: 3,
  },
  {
    windowSize: 1500,
    type: "tablet",
    count: 2,
  },
  {
    windowSize: 800,
    type: "mobile",
    count: 1,
  },
];

export function getCurrentWindowSize() {
  let [currentWindowSize, setCurrentWindowSize] = useState(window.innerWidth);
  window.addEventListener("resize", function (event) {
    setCurrentWindowSize(event.currentTarget.innerWidth);
  });
  let foundObj = obj.find((item) => item.windowSize < currentWindowSize);
  return foundObj !== undefined ? foundObj : { type: "mobile", count: 1 };
}

export function handleClick() {
  const [cureBollen, setBool] = useState(false);

  const changeTheProp = () => {
    setBool(!cureBollen);
  };
  console.log(changeTheProp);
  console.log(cureBollen);
  return { cureBollen, setBool };
}

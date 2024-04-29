import { createContext } from "react";

export const WindowContext = createContext(undefined);
export const ClickContext = createContext({
  value: false,
  setValue: () => {},
});

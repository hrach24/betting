import { createContext } from "react";

export const WindowContext = createContext(undefined);
export const ClickContext = createContext({
  clicked: false,
  setValue: () => {},
});

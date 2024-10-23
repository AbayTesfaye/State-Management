import React, { createContext } from "react";
import ComponentB from "./ComponentB"; // Ensure the path and casing are correct

export const userContext = createContext();
export const channelContext = createContext();

function App() {
  return (
    <userContext.Provider value={"Abay"}>
      <channelContext.Provider value={"Web Development Channel"}>
        <ComponentB />
      </channelContext.Provider>
    </userContext.Provider>
  );
}

export default App;

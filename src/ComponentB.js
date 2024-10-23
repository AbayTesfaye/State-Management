import { useContext } from "react";
import { channelContext, userContext } from "./App";
import React from "react";

function ComponentB() {
  // Changed the name to uppercase
  const user = useContext(userContext);
  const channel = useContext(channelContext);

  return (
    <div>
      <h1>
        {user} - {channel}
      </h1>
    </div>
  );
}

export default ComponentB;

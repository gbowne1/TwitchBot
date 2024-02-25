import React from "react";
import { useParams } from "react-router-dom";

function CommandUsage() {
  const { commandName } = useParams();
  return (
    <div data-testid="commandUsage-con">
      <h1>{commandName} Command Usage</h1>
      <p data-testid="commandUsage-p">
        Here is the usage information for the {commandName} command.
      </p>
      <p data-testid="commandUsage-p">
        Click on the Learn More button to see more about the {commandName}{" "}
        command.
      </p>
    </div>
  );
}

export default CommandUsage;

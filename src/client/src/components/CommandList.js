import React from "react";
import CommandCard from "./CommandCard";
import allCommands from "../commands/allCommands";
import "./CommandList.css";

const commands = [...allCommands];

const CommandList = () => {
  return (
    <div className="command-list" data-testid="commandList-con">
      {commands.map((command, index) => (
        <CommandCard
          command={command.title}
          key={index}
          data-testid="commandList-card"
          onExecute={
            command.onExecute ??
            (() => {
              console.log("executing " + command.title);
            })
          }
          onLearnMore={
            command.onLearnMore ??
            (() => {
              console.log("learning more about " + command.title);
            })
          }
        >
          {command.description}
        </CommandCard>
      ))}
    </div>
  );
};

export default CommandList;

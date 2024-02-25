import allCommands from "../commands/allCommands";

describe("allCommands", () => {
  test("allCommands should be an array", () => {
    expect(Array.isArray(allCommands)).toBe(true);
  });

  test("allCommands should contain valid commands with a title and description", () => {
    allCommands.forEach((command) => {
      expect(typeof command).toBe("object");
      expect(command.title).toBeDefined();
      expect(command.description).toBeDefined();
    });
  });

  test("allCommands should have executable onExecute functions if defined", () => {
    allCommands.forEach((command) => {
      if (command.onExecute) {
        expect(typeof command.onExecute).toBe("function");
      }
    });
  });
  test("allCommands should have executable onLearnMore functions if defined", () => {
    allCommands.forEach((command) => {
      if (command.onLearnMore) {
        expect(typeof command.onLearnMore).toBe("function");
      }
    });
  });
});

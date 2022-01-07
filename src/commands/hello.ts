import vscode from "vscode";

function handler(): void {
  vscode.window.showInformationMessage("Hello Visual Studio Code!");
}

const command: CommandModule = {
  identifier: "hello",
  handler,
};

export default command;

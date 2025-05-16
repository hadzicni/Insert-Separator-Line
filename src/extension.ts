import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const command = vscode.commands.registerCommand(
    "insertLine.separator",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const line = "// " + "-".repeat(60);
      editor.edit((editBuilder) => {
        editBuilder.insert(editor.selection.active, line + "\n");
      });
    }
  );

  context.subscriptions.push(command);
}

export function deactivate() {}

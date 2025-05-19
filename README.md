# 📏 Insert Separator Line VSCode Extension

A simple yet effective VS Code extension that inserts a horizontal comment-style separator line in your code. Ideal for visually structuring large files or separating logical sections.

![VS Code](https://img.shields.io/badge/vscode-1.100+-blue?logo=visualstudiocode)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)

---

## ✨ Features

- ➖ Inserts a `// ------------------------------------------------------------` line
- 📌 Adds the line at the current cursor position
- 📋 Available in editor context menu
- ⌨️ Can also be triggered via Command Palette
- ⚡ Quick and lightweight

---

## ⚙️ Installation

### From VS Code Marketplace

> _Coming soon: Will be available once published._

### From Source (Development)

1. Clone the repository:

   ```bash
   git clone https://github.com/hadzicni/insert-separator-line.git
   cd insert-separator-line
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile the extension:

   ```bash
   npm run compile
   ```

4. Open the project in VS Code and press `F5` to launch the Extension Development Host.

---

## 🚀 Usage

1. Place the cursor where you'd like the separator line to appear.
2. Open the **right-click menu** and select **Insert Separator Line**.
3. Alternatively, use the **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`) and run:

   ```
   Insert Separator Line
   ```

A line like this will be inserted:

```
// ------------------------------------------------------------
```

---

## 🧪 Testing

Run the tests using:

```bash
npm run test
```

---

## 👨‍💻 Author

Made by **Nikola Hadzic**  
GitHub: [@hadzicni](https://github.com/hadzicni)

---

## 📄 License

This extension is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

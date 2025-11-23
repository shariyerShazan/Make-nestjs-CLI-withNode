# NestJS File Generator CLI

A lightweight CLI tool written in **TypeScript** to generate NestJS-style **Module, Controller, and Service** files without using npm or any external package.  
Ideal for learning or quickly scaffolding a NestJS-like project structure.

---

## Features

- Generate a **module** with its corresponding **controller** and **service**.
- Pure TypeScript, no dependencies.
- Simple and easy-to-use CLI interface.
- Works with Node.js.

---

## Folder Structure

After running the CLI:

<project-root>/
├── src/
│ ├── cli.ts
│ └── templates.ts
├── tsconfig.json
└── dist/ (after build)

yaml
Copy code

Example generated files:

users/
├── users.module.ts
├── users.controller.ts
└── users.service.ts

yaml
Copy code

---

## Installation

> This CLI does **not require npm** globally.  
> Only Node.js and TypeScript are required.

1. Clone or download the repository:

```bash
git clone <repo-url>
cd makeCliWithNode
Make sure TypeScript is installed globally (if not already):

bash
Copy code
npm install -g typescript
Build CLI
Compile the TypeScript files to JavaScript:

bash
Copy code
tsc
This will generate the dist/ folder containing cli.js and templates.js.

Usage
Run the CLI to generate a module, controller, and service:

bash
Copy code
node dist/cli.js module <name>
Example:

bash
Copy code
node dist/cli.js module users
Output:

arduino
Copy code
users/
 ├── users.module.ts
 ├── users.controller.ts
 └── users.service.ts

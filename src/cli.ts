#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const {
  moduleTemplate,
  controllerTemplate,
  serviceTemplate
} = require("./templates");

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Usage: node cli.js module <name>");
  process.exit(1);
}

const command = args[0];
const rawName = args[1];

const Name = rawName.charAt(0).toUpperCase() + rawName.slice(1);

if (command === "module") {
  const dir = path.join(process.cwd(), rawName);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  fs.writeFileSync(path.join(dir, `${rawName}.module.ts`), moduleTemplate(Name));
  fs.writeFileSync(path.join(dir, `${rawName}.controller.ts`), controllerTemplate(Name));
  fs.writeFileSync(path.join(dir, `${rawName}.service.ts`), serviceTemplate(Name));

  console.log(`✔ Module, Controller & Service created inside /${rawName}`);
}

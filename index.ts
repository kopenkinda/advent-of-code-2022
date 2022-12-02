import { readdir } from "fs/promises";
import path from "path";
import { readInput } from "./utils";

async function main() {
  const dir = await readdir(".");
  const days = dir.filter((x) => x.startsWith("day"));
  const modules = days.map((x) => import(path.join(process.cwd(), x)));
  const steps = (await Promise.all(modules)).map((module) => module.default);
  let idx = 0;
  for (const step of steps) {
    idx += 1;
    console.log(`Day ${idx}:`);
    const input = readInput(idx);
    if ("step1" in step) {
      console.log(`Step 1: ${await step.step1(input)}`);
    }
    if ("step2" in step) {
      console.log(`Step 2: ${await step.step2(input)}`);
    }
    console.log();
  }
}

main();

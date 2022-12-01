import { readInput } from "./utils";

async function step1() {
  const input = readInput(1)
    .split("\n\n")
    .map((x) => x.split("\n").map((x) => +x));
  const sums = input.map((x) => x.reduce((a, b) => a + b, 0));
  return Math.max(...sums);
}
async function step2() {
  const input = readInput(1)
    .split("\n\n")
    .map((x) => x.split("\n").map((x) => +x));
  const sums = input.map((x) => x.reduce((a, b) => a + b, 0));
  return sums
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
}

(async function main() {
  console.log(await step1());
  console.log(await step2());
})();

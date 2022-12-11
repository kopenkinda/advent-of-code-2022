import { readInput } from "./utils";

async function step1(input: string) {
  const sums = input
    .split("\n\n")
    .map((x) => x.split("\n").map((x) => +x))
    .map((x) => x.reduce((a, b) => a + b, 0));
  return Math.max(...sums);
}

async function step2(input: string) {
  const sums = input
    .split("\n\n")
    .map((x) => x.split("\n").map((x) => +x))
    .map((x) => x.reduce((a, b) => a + b, 0));
  return sums
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
}

export default {
  step1,
  step2,
};

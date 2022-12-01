import { readFileSync } from "fs";

export function readInput(day: number): string {
  return readFileSync(`./inputs/${day}.input`, "utf-8");
}

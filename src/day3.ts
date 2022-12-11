const priorityKeys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;
type Priority = typeof priorityKeys[number];
const priorities = new Map<Priority, number>();
priorityKeys.forEach((x, i) => priorities.set(x, i + 1));

const parseStep1Input = (input: string) => {
  const lines = input.split("\n");
  const sacks = lines.map(
    (line) =>
      [
        line.slice(0, line.length / 2).split("") as Priority[],
        line.slice(line.length / 2).split("") as Priority[],
      ] as const
  );
  return sacks;
};

const step1common = (a: Priority[], b: Priority[]) => {
  for (const x of a) {
    if (b.includes(x)) return x;
  }
};

async function step1(input: string) {
  const sacks = parseStep1Input(input);
  let result = 0;
  for (const [a, b] of sacks) {
    const commonItem = step1common(a, b);
    if (commonItem !== undefined) {
      result += priorities.get(commonItem)!;
    }
  }
  return result;
}

const parseStep2Input = (input: string) => {
  const lines = input.split("\n");
  const sacks = lines.map((line) => line.split("") as Priority[]);
  const groups: [Priority[], Priority[], Priority[]][] = [];
  for (let i = 0; i < sacks.length; i += 3) {
    groups.push([sacks[i], sacks[i + 1], sacks[i + 2]]);
  }
  return groups;
};

const step2common = (a: Priority[], b: Priority[], c: Priority[]) => {
  for (const x of a) {
    if (b.includes(x) && c.includes(x)) return x;
  }
};
async function step2(input: string) {
  const groups = parseStep2Input(input);
  let result = 0;
  for (const [a, b, c] of groups) {
    const commonItem = step2common(a, b, c);
    if (commonItem !== undefined) {
      result += priorities.get(commonItem)!;
    }
  }
  return result;
}

export default {
  step1,
  step2,
};

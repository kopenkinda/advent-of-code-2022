const Scores = {
  Scissors: 3,
  Paper: 2,
  Rock: 1,
} as const;

type ScoreKeys = keyof typeof Scores;

const Step1Map = {
  A: "Rock",
  X: "Rock",
  B: "Paper",
  Y: "Paper",
  C: "Scissors",
  Z: "Scissors",
} as const;

const Outcome = {
  Win: 6,
  Draw: 3,
  Lose: 0,
} as const;

type OutcomeKeys = keyof typeof Outcome;
type InputValues = "A" | "B" | "C" | "X" | "Y" | "Z";

const step1formatInput = (input: string) => {
  const rounds = input.split("\n");
  return rounds.map((round) => {
    const [player1, player2] = round.split(" ") as [InputValues, InputValues];
    return [Step1Map[player1], Step1Map[player2]] as [ScoreKeys, ScoreKeys];
  });
};

const step1Simulate = (rounds: [ScoreKeys, ScoreKeys][]) => {
  let score = 0;
  for (const [opponent, player] of rounds) {
    if (opponent === player) {
      score += Outcome.Draw;
      score += Scores[player];
    } else if (
      (opponent === "Rock" && player === "Scissors") ||
      (opponent === "Paper" && player === "Rock") ||
      (opponent === "Scissors" && player === "Paper")
    ) {
      score += Outcome.Lose;
      score += Scores[player];
    } else {
      score += Outcome.Win;
      score += Scores[player];
    }
  }
  return score;
};

function step1(input: string) {
  const rounds = step1formatInput(input);
  const result = step1Simulate(rounds);
  return result;
}

const Step2Map = {
  A: "Rock",
  X: "Lose",
  B: "Paper",
  Y: "Draw",
  C: "Scissors",
  Z: "Win",
} as const;

const step2formatInput = (input: string) => {
  const rounds = input.split("\n");
  return rounds.map((round) => {
    const [player1, player2] = round.split(" ") as [InputValues, InputValues];
    return [Step2Map[player1], Step2Map[player2]] as [ScoreKeys, OutcomeKeys];
  });
};

const step2Simulate = (rounds: [ScoreKeys, OutcomeKeys][]) => {
  let score = 0;
  for (const [opponent, outcome] of rounds) {
    if (outcome === "Win") {
      score += Outcome.Win;
      if (opponent === "Rock") {
        score += Scores.Paper;
      }
      if (opponent === "Paper") {
        score += Scores.Scissors;
      }
      if (opponent === "Scissors") {
        score += Scores.Rock;
      }
    }
    if (outcome === "Draw") {
      score += Outcome.Draw;
      score += Scores[opponent];
    }
    if (outcome === "Lose") {
      score += Outcome.Lose;
      if (opponent === "Rock") {
        score += Scores.Scissors;
      }
      if (opponent === "Paper") {
        score += Scores.Rock;
      }
      if (opponent === "Scissors") {
        score += Scores.Paper;
      }
    }
  }
  return score;
};

function step2(input: string) {
  const rounds = step2formatInput(input);
  const result = step2Simulate(rounds);
  return result;
}

export default { step1, step2 };

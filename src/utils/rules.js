export const rules = {
  rock: {
    lizard: true,
    scissors: true,
  },
  paper: {
    rock: true,
    spock: true,
  },
  scissors: {
    paper: true,
    lizard: true,
  },
  lizard: {
    spock: true,
    paper: true,
  },
  spock: {
    scissors: true,
    rock: true,
  },
};

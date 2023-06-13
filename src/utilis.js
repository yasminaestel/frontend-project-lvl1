const getRandom = (a, b) => Math.floor(Math.random() * a) + b;

const getRandomOperation = () => {
  const randomPercentage = Math.random();
  if (randomPercentage < 0.33) {
    return '+';
  }
  if (randomPercentage < 0.66) {
    return '-';
  }
  return '*';
};

export { getRandom, getRandomOperation };

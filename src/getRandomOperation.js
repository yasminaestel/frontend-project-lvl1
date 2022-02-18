const getRandomOperator = () => {
  const randomPercentage = Math.random();
  if (randomPercentage < 0.33) {
    return '+';
  } else if (randomPercentage < 0.66) {
    return '-';
  } else {
    return '*';
  }
};
export default getRandomOperator;

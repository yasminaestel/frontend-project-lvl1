const getRandomOperator = () => {
  const randomPercentage = Math.random();
  if (randomPercentage < 0.33) {
    return "+";
  }
  if (randomPercentage < 0.66) {
    return "-";
  }
  {
    return "*";
  }
};
export default getRandomOperator;

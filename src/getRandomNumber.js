const getRandomNumber = (min, max = 100) =>
  Math.floor(min + Math.random() * (max + 1 - min));

export default getRandomNumber;

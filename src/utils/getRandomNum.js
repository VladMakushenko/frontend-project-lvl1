export default (min = 1, max = 100) => {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
};

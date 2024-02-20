const roundToDecimalPlace = (num, places) => {
  return Math.round(num * 10 ** places) / 10 ** places;
};

export { roundToDecimalPlace };

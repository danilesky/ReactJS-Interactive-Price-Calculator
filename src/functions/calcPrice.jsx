const exampleObj = {
  startPrice: 0.22,
  finalPrice: 1.43,
  conditions: [{ value: "some value", start: 1.33, final: 2 }],
};

const calcPrice = (conditions) => {
  //def start and end price range
  let start = conditions.startPrice;
  let final = conditions.endPrice;

  //conditions to calculate price
  conditions.conditions.map((condition) => {
    if (condition.value) {
      start = start + condition.start;
      final = final + condition.final;
    }
  });

  //price in 2 decimal numbers
  start = Math.floor(start * 100) / 100;
  final = Math.floor(final * 100) / 100;

  //return final string
  return `${start} € - ${final} €`;
};

export default calcPrice;

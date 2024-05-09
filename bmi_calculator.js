const bmiCalculator = (height, weight) => {
  const bmi = weight / Math.floor((height ** 2));
  return `Your body mass index is ${bmi}`;
};


console.log(bmiCalculator(65,1.8))

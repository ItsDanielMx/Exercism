//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ordinal = (number) => {
  const lastTwo = number % 100;
  const lastOne = number % 10;
  if(lastTwo >=11 && lastTwo <=13) return "th";
  if(lastOne==1) return "st";
  if(lastOne==2) return "nd";
  if(lastOne==3) return "rd";
  return "th";
}

export const format = (name, number) => {
  const ending = ordinal(number);
  return name + ", you are the " + number + ending + " customer we serve today. Thank you!";
};

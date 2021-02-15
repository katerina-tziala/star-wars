export const getRomanNumeral = (number) => {
  const romanIndex = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let romanNumeral = '', i;

  for (i in romanIndex) {
    while (number >= romanIndex[i]) {
      romanNumeral += i;
      number -= romanIndex[i];
    }
  }

  return romanNumeral;
};

export const getDisplayedDateFormat = (date) => {
  const dateToDisplay = new Date(date);
  return dateToDisplay.toLocaleDateString();
};

export const getAmazonUrl = (isbn) => {
  return `https://www.amazon.co.uk/s?k=${isbn}`;
};

export const getImgUrl = (isbn) => {
  return `https://reststop.randomhouse.com/resources/titles/${isbn}`;
};

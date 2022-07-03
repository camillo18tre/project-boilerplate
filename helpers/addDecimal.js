function insertDecimal(num) {
  return (num / 100).toFixed(2) * 100;
}

export { insertDecimal };

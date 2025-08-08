export const formatAmount = (amount: number) => {
  const isNegative = amount < 0;
  const absoluteAmount = Math.abs(amount);
  const formattedAmount = absoluteAmount.toLocaleString("en-US");
  return isNegative ? `-$${formattedAmount}` : `$${formattedAmount}`;
};

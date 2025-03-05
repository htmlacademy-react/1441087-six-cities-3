function getCapitalizedString(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

function getRatingWidth(value: number): string {
  const widthPercent = (Number.parseInt(value.toFixed(), 10) * 100) / 5;
  return `${widthPercent}%`;
}

export { getCapitalizedString, getRatingWidth };

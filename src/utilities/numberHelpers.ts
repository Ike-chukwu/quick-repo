export interface Config {
  /** The value to format */
  number: number | string;

  /** The number of decimal places */
  decimalAmount?: number;

  /** The decimal indicator.*/
  decimalMark?: string;

  /**The seperator . */
  delimiter?: string;

  prefix?: string;
  suffix?: string;
}

/**
 *
 * Format a number ina human readable way
 * @property {number} config.number - The number to format.
 * @property {number} [config.decimalAmount = 2] - The number of decimal places.
 * @property {string} [config.delimiter = ","] - The seperator .
 * @property {string} [config.decimalMark = "."] - The decimal indicator.
 *
 * @returns {string} the formatted string
 *
 * @example
 * formatNumber({number:123456}) gives 123,456.
 * formatNumber({number:123456, decimalAmount:0}) gives 123,456
 * formatNumber({number:123456, delimiter:" "}) gives 123 456.00
 */
export const formatNumber = ({
  number = 0,
  decimalAmount = 2,
  decimalMark = ".",
  delimiter = ",",
  prefix = "",
  suffix = "",
}: Config): string => {
  if (decimalAmount >= Number.MAX_SAFE_INTEGER) {
    decimalAmount = 0;
    const numberParts = number.toString().split(".");
    if (numberParts[1]) {
      decimalAmount = numberParts[1].length;
    }
  }

  const numToFormat = Number(number);

  if (
    isNaN(numToFormat) ||
    Math.abs(Number(number)) >= Number.MAX_SAFE_INTEGER
  ) {
    throw new Error("Number is not valid.");
  }

  let minusSign = "";
  if (numToFormat < 0) {
    minusSign = "- ";
  }

  const absoluteAmountString = Math.abs(numToFormat).toFixed(decimalAmount);

  const integerString = parseInt(absoluteAmountString, 10).toString();

  //Get part before decimal point, seperated by delimiter
  const integerPart = integerString.replace(
    /(.)(?=(\d{3})+$)/g,
    `$1${delimiter}`
  );

  let fractionalPart = "";
  if (decimalAmount) {
    const decimalNumbers =
      Number(absoluteAmountString) - parseInt(absoluteAmountString, 10);

    fractionalPart = `${decimalMark}${decimalNumbers
      .toFixed(decimalAmount)
      .slice(2)}`;
  }

  return `${minusSign}${prefix}${integerPart}${fractionalPart}${suffix}`;
};

export const formatOrdinal = (num: number, digits?: number) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((item) => {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 0).replace(rx, "$1") + item.symbol
    : "0";
};

export const restrictToNumber = (value?: string, noZero?: boolean) => {
  value = value?.toString();

  if (!value) {
    return "";
  }

  let num = value;

  num = num.replace(/\D/g, "");

  if (noZero && num[0] === "0") {
    return num.slice(1);
  }

  return num;
};

export const restrictToNumberAndOneDot = (value?: string) => {
  value = value?.toString().trim();

  if (!value) {
    return "";
  }

  let num = value;

  num = num.replace(/[^.\d]/g, "").replace(/^(\d*\.?)|(\d*)\.?/g, "$1$2");

  return num;
};

export const clamp = (num = 0, min = 0, max = 0) =>
  Math.min(Math.max(num, min), max);

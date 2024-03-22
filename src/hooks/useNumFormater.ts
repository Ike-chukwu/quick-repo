import React, { useCallback } from "react";

import {
  formatNumber,
  Config as Props,
  formatOrdinal,
} from "@/utils/numberHelpers";

interface Config extends Props {
  asCurrency?: boolean;
  prefix?: string;
  asOrdinal?: boolean;
}

const defaultConfig = {
  asCurrency: true,
  number: 0,
  decimalAmount: 0,
  decimalMark: ".",
  delimiter: ",",
  asOrdinal: false,
  prefix: "", //custom currency or other one-off symbol
};

let defaultSymbol = "₦";

const useNumFormatter = () => {
  const format = useCallback(({ decimalAmount = 2, ...config }: Config) => {
    const currency = defaultSymbol; //get via state e.g redux for dynamic currency;
    //get suffix/prefix from currency info, if as currency

    if (config.asOrdinal) {
      return `${config.asCurrency ? currency : ""}${formatOrdinal(
        +config.number
      )}`;
    }

    const formatConfig = {
      ...defaultConfig,
      prefix: config.asCurrency === false ? "" : currency,
      decimalAmount: (config.number as number) % 1 > 0 ? decimalAmount || 2 : 0,
      ...config,
    };

    return formatNumber(formatConfig);
  }, []);

  return { format, currency: defaultSymbol };
};

export default useNumFormatter;

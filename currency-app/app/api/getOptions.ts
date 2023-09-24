export function getOptions({option}: {option: string}) {
    if (option === 'first'){
        return [
            { type: "USDT", name: "TRC20", cur: "USD" },
            { type: "USDT", name: "ERC20", cur: "USD" },
            { type: "USDT", name: "BEP20", cur: "USD" },
            { type: "USDC", name: "ERC20", cur: "USD" },
            { type: "USDC", name: "BEP20", cur: "USD" },
          ];
    }
    if (option === "second") {
        return [
            { type: "Cash", name: "EUR", cur: "EUR" },
            { type: "Cash", name: "USD", cur: "USD" },
            { type: "Cash", name: "PLN", cur: "PLN" },
            { type: "BLIK", name: "PLN", cur: "PLN" },
            { type: "SEPA", name: "EUR", cur: "EUR" },
          ];
    }
}

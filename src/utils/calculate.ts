import { CalculateProps } from "@types";

const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js'

export async function calculate({ from, to, setHistory, setResult }: CalculateProps) {
    const secondVal = await _calculateHelper(from, to);

    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const dateString = date.toLocaleDateString('ru-RU', options);

    if (secondVal !== -1) {
        setHistory({
            type: "ADD_TO_HISTORY", payload: {
                from: from[1],
                to: to,
                first_val: from[0]!,
                second_val: secondVal,
                date: dateString,
            }
        })
    }

    setResult(secondVal);
}

/**
 * Функция-хелпер, инкапсулирует логику подсчета результата.
 * Вроде бы учел все corner-кейсы, но может что-то и просочится.
 */
async function _calculateHelper(from: [number | undefined, string ], to: string) {
    if (from[0] === undefined || from[0] < 0) {
        return -1;
    }

    if (from[0] === 0) {
        return 0;
    }

    if (from[1] === "RUB" && to === "RUB") {
        return from[0];
    }

    const data = await fetch(apiUrl).then(value => value.json());

    if (from[1] === "RUB" ) {
        return from[0] * (1 / (data?.Valute[to]["Value"] / data?.Valute[to]["Nominal"]));
    }

    if (to === "RUB") {
        return from[0] * (data?.Valute[from[1]]["Value"] / data?.Valute[from[1]]["Nominal"]);
    }

    const first = 1 / (data?.Valute[from[1]]["Value"] / data?.Valute[from[1]]["Nominal"])
    const second = 1 / (data?.Valute[to]["Value"] / data?.Valute[to]["Nominal"])

    return Math.round((second / first) * from[0]*1000) / 1000;
}
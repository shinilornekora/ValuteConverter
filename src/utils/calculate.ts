import { CalculateProps } from "../types";

export async function calculate({ from, to, setHistory, setResult }: CalculateProps) {
    let second_val;

    if (from[0] === undefined || from[0] < 0) {
        second_val = -1;
    } else if (from[0] === 0) {
        second_val = 0
    } else {
        let data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(value => value.json()).then(value => value)
            
        if (from[1] === "RUB" && to === "RUB")
            second_val = from[0];
        else if (from[1] === "RUB")
            second_val = from[0] * (1 / (data?.Valute[to]["Value"] / data?.Valute[to]["Nominal"]));
        else if (to === "RUB")
            second_val = from[0] * (data?.Valute[from[1]]["Value"] / data?.Valute[from[1]]["Nominal"]);
        else {
            const first = 1 / (data?.Valute[from[1]]["Value"] / data?.Valute[from[1]]["Nominal"])
            const second = 1 / (data?.Valute[to]["Value"] / data?.Valute[to]["Nominal"])

            second_val = Math.round((second / first) * from[0]*1000) / 1000;
        }
    }
    const date = new Date();

    const options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    // @ts-expect-error: требует типа, которого просто нельзя найти
    const dateString = date.toLocaleDateString('ru-RU', options);

    if (second_val !== -1) {
        setHistory({
            type: "ADD_TO_HISTORY", payload: {
                from: from[1],
                to: to,
                first_val: from[0]!,
                second_val: second_val,
                date: dateString,
            }
        })
    }
    setResult(second_val);
}
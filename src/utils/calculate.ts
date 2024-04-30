import { CalculateProps } from '@types';
import { from as _from, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

export function calculate({ from, to, setHistory, setResult }: CalculateProps) {
    _from(_calculateHelper(from, to)).pipe(
        switchMap((secondVal: number) => {
            if (secondVal !== -1) {
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

                setHistory({
                    type: "ADD_TO_HISTORY",
                    payload: {
                        from: from[1],
                        to: to,
                        first_val: from[0]!,
                        second_val: secondVal,
                        date: dateString,
                    }
                });
            }

            setResult(secondVal);

            return of(null);
        }),
        catchError((error: Error) => {
            console.error('An error occurred:', error);
            setResult(-1);

            return of(null);
        })
    ).subscribe();
}

async function _calculateHelper(from: [number | undefined, string], to: string): Promise<number> {
    if (from[0] === undefined || from[0] < 0) {
        return -1;
    }

    if (from[0] === 0) {
        return 0;
    }

    if (from[1] === "RUB" && to === "RUB") {
        return from[0];
    }

    const data = await fetch(apiUrl).then(response => response.json());

    if (from[1] === "RUB") {
        return from[0] * (1 / (data?.Valute[to]["Value"] / data?.Valute[to]["Nominal"]));
    }

    if (to === "RUB") {
        return from[0] * (data?.Valute[from[1]]["Value"] / data?.Valute[from[1]]["Nominal"]);
    }

    const first = 1 / (data?.Valute[from[1]]["Value"] / data?.Valute[from[1]]["Nominal"]);
    const second = 1 / (data?.Valute[to]["Value"] / data?.Valute[to]["Nominal"]);

    return Math.round((second / first) * from[0] * 1000) / 1000;
}

import '../styles/calculation.css'
import { useState } from "react";
import { useDispatch } from "react-redux";

const Calculation = () => {
    const [result, setResult] = useState(0);
    const setHistory = useDispatch();

    async function calculate(from: [number | undefined, string], to: string) {
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
                let first = 1 / (data?.Valute[from[1]]["Value"] / data?.Valute[from[1]]["Nominal"])
                let second = 1 / (data?.Valute[to]["Value"] / data?.Valute[to]["Nominal"])
                second_val = Math.round((second / first) * from[0]*1000)/1000;
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
        // @ts-ignore
        const dateString = date.toLocaleDateString('ru-RU', options);
        if (second_val !== -1) {
            setHistory({
                type: "ADD_TO_HISTORY", payload: {
                    from: from[1],
                    to: to,
                    first_val: from[0],
                    second_val: second_val,
                    date: dateString,
                }
            })
        }
        setResult(second_val);
    }

    function getNumber() : number | undefined{
        let data = document.querySelector("#from_value") as HTMLInputElement
        if (!isNaN(Number(data.value)))
            return Number(data.value);
    }

    function getVal(tag: string) {
        let data = document.querySelector(`${tag}`) as HTMLSelectElement
        return data?.value
    }


    return (
        <div className="calculation__form">
            <div className="first__area">
                <select name="from" id="from__which">
                    <option value="USD">Dollars</option>
                    <option value="RUB">Rubles</option>
                    <option value="JPY">Yens</option>
                    <option value="CNY">Yuan</option>
                </select>
                <input type="text" id="from_value" placeholder="Введите количество..."/>
            </div>
            <div className="second__area">
                <select name="to" id="to__which">
                    <option value="USD">Dollars</option>
                    <option value="RUB">Rubles</option>
                    <option value="JPY">Yens</option>
                    <option value="CNY">Yuan</option>
                </select>
                <div className="result">
                    {result}
                </div>
                <button onClick={async() =>
                    await calculate([getNumber(), getVal("#from__which")], getVal("#to__which"))
                }
                >Рассчитать!</button>
            </div>
        </div>
    );
};
export default Calculation;
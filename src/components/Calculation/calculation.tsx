import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { getVal } from "../../utils/getTagValue";
import { getNumber } from "../../utils/getValueAsNumber";

import { calculate } from "../../utils/calculate";

import './styles.css';

// Это какое-то чудовище. Разберу его следующей итерацией.
export const Calculation = () => {
    const [result, setResult] = useState(0);
    const setHistory = useDispatch();


    const doTheMathWork = useCallback(() => {
        const helper = async () => {
            await calculate({
                from: [ getNumber(), getVal("#from__which") ], 
                to: getVal("#to__which"),
                setHistory,
                setResult
            })
        }

        helper().catch()
    }, [])

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
                <button onClick={ doTheMathWork }>
                    Рассчитать!
                </button>
            </div>
        </div>
    );
};

import React, { useEffect } from 'react';

import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { getVal } from "@utils/getTagValue";
import { calculate } from "@utils/calculate";
import { getNumber } from "@utils/getValueAsNumber";

import * as css from './styles.module.css';
import { ErrorWidget } from '../ErrorWidget';

export const Calculation = () => {
    const [result, setResult] = useState(0);
    const [isError, setError] = useState(false);

    const setHistory = useDispatch();

    useEffect(() => {
        if (result === -1) {
            setError(true);
            return;
        }

        setError(false);
    }, [result, setError]);

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
        <div className={ css.form }>
            <div className={ css.first }>
                <select name="from" id="from__which">
                    <option value="USD">Dollars</option>
                    <option value="RUB">Rubles</option>
                    <option value="JPY">Yens</option>
                    <option value="CNY">Yuan</option>
                </select>
                <input 
                    type="text" 
                    id="from_value" 
                    placeholder="Введите количество..."
                />
            </div>
            <div className={ css.second }>
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
            { isError && <ErrorWidget message="Invalid input value." /> }
        </div>
    );
};

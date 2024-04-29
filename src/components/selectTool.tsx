import React from "react";

import { useCallback } from "react";
import { useDispatch } from "react-redux";

type Props = {
    tag: string;
}

export const SelectTool: React.FC<Props> = ({ tag }) => {
    const setHistory = useDispatch()

    const handleAction = useCallback(() => setHistory({ 
        type: "ACTION__SEE", hist: {} 
    }), [setHistory])

    return (
        <select id={ tag } onChange={ handleAction }>
            <option value="None">Выбрать...</option>
            <option value="USD">Dollars</option>
            <option value="RUB">Rubles</option>
            <option value="JPY">Yens</option>
            <option value="CNY">Yuan</option>
        </select>
    );
};
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const SelectTool = (props: any) => {
    const setHistory = useDispatch()

    const handleAction = useCallback(() => setHistory({ 
        type: "ACTION_SEE", hist: {} 
    }), [setHistory])

    return (
        <select id={ props.props } onChange={ handleAction }>
            <option value="None">Выбрать...</option>
            <option value="USD">Dollars</option>
            <option value="RUB">Rubles</option>
            <option value="JPY">Yens</option>
            <option value="CNY">Yuan</option>
        </select>
    );
};
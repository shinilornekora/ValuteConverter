import React from 'react';
import {useDispatch} from "react-redux";

const SelectTool = (props: any) => {
    const setHistory = useDispatch()
    return (
        <select id={props.props} onChange={() => setHistory({type: "ACTION__SEE", hist: {}})}>
            <option value="None">Выбрать...</option>
            <option value="USD">Dollars</option>
            <option value="RUB">Rubles</option>
            <option value="JPY">Yens</option>
            <option value="CNY">Yuan</option>
        </select>
    );
};

export default SelectTool;
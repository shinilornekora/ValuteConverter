import React from 'react';

const SelectTool = (props: any) => {
    return (
        <select id={props.props}>
            <option value="None">Выбрать...</option>
            <option value="USD">Dollars</option>
            <option value="RUB">Rubles</option>
            <option value="JPY">Yens</option>
            <option value="CNY">Yuan</option>
        </select>
    );
};

export default SelectTool;
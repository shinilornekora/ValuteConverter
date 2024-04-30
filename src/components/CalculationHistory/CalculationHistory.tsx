import React from 'react';

import { Convertation } from "../Convertation";
import { useSelector } from "react-redux";
import { SelectTool } from "../selectTool"

import { calculationsCheck } from "@utils/calculationsCheck";

import { StoreState } from '@types';

import * as css from "./styles.module.css";

export const CalculationHistory = () => {
    const history = useSelector((state: StoreState) => state.hist).filter(calculationsCheck)

    return (
        <div className={ css.history }>
            <div className={ css.noticement }>
                Фильтрация по истории: Исходная валюта - Целевая валюта
            </div>
            <div className={ css.filter }>
                <SelectTool tag="filter__from" />
                <SelectTool tag="filter__to" />
            </div>
            <div className={ css.table }>
                <Convertation history={ history }/>
            </div>
        </div>
    );
};
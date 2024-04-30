import React from 'react';

import { Calculation } from "./components/Calculation/Calculation";
import { CalculationHistory } from "./components/CalculationHistory/CalculationHistory";

import * as css from './app.module.css';

export const App = () => {
    return (
        <div className={ css.App }>
            <Calculation/>
            <CalculationHistory/>
        </div>
    );
}
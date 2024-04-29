import React from 'react';

import { Calculation } from "./components/Calculation/Сalculation";
import { CalculationHistory } from "./components/CalculationHistory/СalculationHistory";

import './styles/app.css'

export const App = () => {
    return (
        <div className="App">
          <Calculation/>
          <CalculationHistory/>
        </div>
    );
}
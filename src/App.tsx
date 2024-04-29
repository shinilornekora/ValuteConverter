import React from 'react';

import { Calculation } from "./components/Calculation/Calculation";
import { CalculationHistory } from "./components/CalculationHistory/CalculationHistory";

import './app.css'

export const App = () => {
    return (
        <div className="App">
          <Calculation/>
          <CalculationHistory/>
        </div>
    );
}
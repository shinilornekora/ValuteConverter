import { Calculation } from "./components/Calculation/calculation";
import { CalculationHistory } from "./components/CalculationHistory/calculationHistory";

import './styles/app.css'

export const App = () => {
    return (
        <div className="App">
          <Calculation/>
          <CalculationHistory/>
        </div>
    );
}
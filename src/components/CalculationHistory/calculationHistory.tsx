import { Convertation } from "../Convertation/convertation";
import { useSelector } from "react-redux";
import { SelectTool } from "../selectTool"

import { calculationsCheck } from "../../utils/calculationsCheck";

import './styles.css'

export const CalculationHistory = () => {
    const history = useSelector((state: any) => state.hist).filter(calculationsCheck)

    return (
        <div className="history__form">
            <div className="noticement">Фильтрация по истории: Исходная валюта - Целевая валюта</div>
            <div className="filter__field">
                <SelectTool tag="filter__from" />

                <SelectTool tag="filter__to" />
            </div>
            <div className="table__history">
                <Convertation props={ history }/>
            </div>
        </div>
    );
};
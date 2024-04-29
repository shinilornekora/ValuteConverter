import { Convertation } from "../Convertation/convertation";
import { useSelector } from "react-redux";
import { SelectTool } from "../selectTool"

import { calculationsCheck } from "../../utils/calculationsCheck";

import * as css from './styles.css';

export const CalculationHistory = () => {
    const history = useSelector((state: any) => state.hist).filter(calculationsCheck)

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
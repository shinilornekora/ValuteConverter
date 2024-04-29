import { Convertation } from "../Convertation/convertation";
import { useSelector } from "react-redux";
import { SelectTool } from "../selectTool"

import './styles.css'

export const CalculationHistory = () => {
    function getVal(tag: string) {
        let data = document.querySelector(`${tag}`) as HTMLSelectElement
        return data?.value
    }
    const convHistory = useSelector((state: any) => state.hist)
         .filter((e: any) => {
             return e["from"] === `${getVal("#filter__from")}` &&
             e["to"] === `${getVal("#filter__to")}` ||
             `${getVal("#filter__to")}` === "None" ||
             `${getVal("#filter__from")}` === "None"
         })
    return (
        <div className="history__form">
            <div className="noticement">Фильтрация по истории: Исходная валюта - Целевая валюта</div>
            <div className="filter__field">
                <SelectTool props="filter__from" />

                <SelectTool props="filter__to" />
            </div>
            <div className="table__history">
                <Convertation props={convHistory}/>
            </div>
        </div>
    );
};
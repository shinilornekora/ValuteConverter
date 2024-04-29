import React from "react"

import '../styles/history__element.css'

export const Convertation = (...props: any[]) => {
    const result = []
    setTimeout(() => 1, 1000)

    // Господь, почему здесь столько прямых обращений к пропсам
    for (let i = 0; i < props[0].props.length; i++) {
        let e = props[0].props[i]
        result.push(
            <tr key={i + 1} className="wrapper">
                <td className="first__valute">{e["from"]}</td>
                <td className="second__valute">{e["to"]}</td>
                <td className="first__valute__amount">{e["first_val"]}</td>
                <td className="second__valute__amount">{e["second_val"]}</td>
                <td className="convert__date">{e["date"]}</td>
            </tr>
        )
    }

    return (
        <React.Fragment>
            <table cellSpacing="0" cellPadding="8">
                <tr key={0} className="wrapper">
                    <td>Исходная валюта</td>
                    <td>Целевая валюта</td>
                    <td>Сумма в исходной валюте</td>
                    <td>Сумма в целевой валюте</td>
                    <td>Дата конвертации</td>
                </tr>
                {result.reverse()}
            </table>
        </React.Fragment>);
};
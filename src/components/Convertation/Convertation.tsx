import React, { Fragment } from "react"

import { makeKey } from "@utils/makeKey";

import { ConvertationType } from '@types';

import * as css from './styles.module.css';

type Props = {
    history: Array<ConvertationType>;
};

export const Convertation: React.FC<Props> = ({ history }) => {
    const result: Array<JSX.Element> = []

    setTimeout(() => 1, 1000)

    history.forEach((action) => {
        result.push(
            <tr key={ makeKey(action) } className={ css.wrapper }>
                <td className="first__valute">{ action.from }</td>
                <td className="second__valute">{ action.to }</td>
                <td className="first__valute__amount">{ action.first_val }</td>
                <td className="second__valute__amount">{ action.second_val }</td>
                <td className="convert__date">{ action.date }</td>
            </tr>
        )
    });

    return (
        <Fragment>
            <table cellSpacing="0" cellPadding="8">
                <tr key={ Math.random() } className={ css.wrapper }>
                    <td>Исходная валюта</td>
                    <td>Целевая валюта</td>
                    <td>Сумма в исходной валюте</td>
                    <td>Сумма в целевой валюте</td>
                    <td>Дата конвертации</td>
                </tr>
                { result.reverse() }
            </table>
        </Fragment>);
};
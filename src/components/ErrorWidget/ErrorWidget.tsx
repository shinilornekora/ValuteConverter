import React from 'react';

import * as css from './styles.module.css';

type Props = {
    message: string;
}

export const ErrorWidget: React.FC<Props> = ({ message }) => {
    return (
        <div className={ css.wrapper }>
            <div className={ css.textWrapper }>
                { message }
            </div>
        </div>
    )
}
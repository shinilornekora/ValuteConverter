export type ConvertationType = {
    from: string;
    to: string;
    first_val: string | number;
    second_val: string | number;
    date: Date;
};

export type ConvertAction = {
    type: string;
    payload: ConvertationType;
}

export type CalculateProps = {
    from: [number | undefined, string],
    to: string,
    setHistory: (action: ConvertAction) => void;
    setResult: (value: number) => void;
}

export type StoreState = {
    hist: Array<ConvertationType>;
}

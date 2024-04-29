export const makeKey = (action: Object): string => {
    return Object.values(action).reduce((a, b) => a + b, '');
};
import { getVal } from "./getTagValue";

export function calculationsCheck(e: any) {
    const isFromIdentical = e["from"] === `${getVal("#filter__from")}`; 
    const isToIdentical = e["to"] === `${getVal("#filter__to")}`;
    const isToNone = `${getVal("#filter__to")}` === "None";
    const isFromNone = `${getVal("#filter__from")}` === "None";

    return isFromIdentical && isToIdentical || isToNone || isFromNone;
}
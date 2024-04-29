export function getNumber() : number | undefined {
    return Number((document.querySelector("#from_value") as HTMLInputElement)?.value);
}
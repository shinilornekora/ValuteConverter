export function getVal(tag: string) {
    return (document.querySelector(`${tag}`) as HTMLSelectElement)?.value
}
/**
 * format number with comma separator
 *
 * @param v string contains numeric value
 * @param separator separator character
 * @returns formatted string
 */
export function formatNumber(v: any, separator = ","): string {
    return v
        .toString()
        .replace(/(?<!(\.\d*|^.{0}))(?=(\d{3})+(?!\d))/g, separator);
}

/**
 * extract numeric character from string
 *
 * @param v string
 * @returns string
 */
export function extractNumeric(v: string): string {
    return (v.match(/[-\d.]+/g) || [])
        .join("")
        .split(".")
        .slice(0, 2)
        .join(".")
        .split("")
        .map((c, index) => (c === "-" ? (index === 0 ? c : "") : c))
        .join("");
}

/**
 * parse number from string
 *
 * @param v number
 * @returns number or NaN
 */
export function parseNumber(v: string): number {
    const n = extractNumeric(v);
    return n.length === 0 || isNaN(+n) ? NaN : +n;
}

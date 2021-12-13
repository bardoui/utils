/**
 * format number with comma separator
 *
 * @param v string contains numeric value
 * @returns formatted string
 */
export function formatNumber(v: number): string {
    return v.toLocaleString("en")
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
        .join("")
        .replace(/^0+/, "0")
        .replace(/^-[0]+/, "-0")
        .replace(/^\./, "0.")
        .replace(/^-\./, "-0.");
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

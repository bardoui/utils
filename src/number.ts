import numeral from "numeral";

/**
 * format number with comma separator and sign
 *
 * @param v number
 * @param sign determine number must contains sign (+ and -) or not
 * @param format format string (npm numeral package style)
 * @returns formatted string
 */
export function prettyNum(
    v: number,
    sign = false,
    format = "0,0[.][00]"
): string {
    return (sign && v > 0 ? "+" : "") + numeral(v).format(format);
}

/**
 * Extract number from formatted string
 *
 * @param numStr number
 * @returns num
 */
export function extractNumber(numStr: string): number | null {
    let parts = (numStr.match(/[\d\.]+/g) || []).join("").split(".");
    let num = parts.slice(0, 2).join(".");
    return num.length > 0 ? +num : null;
}

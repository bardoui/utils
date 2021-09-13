import numeral from "numeral";

/**
 * Format number with separator
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

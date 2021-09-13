/**
 * format iranian mobile number
 *
 * @param mobile mobile number string (11 digit). formatted input allowed
 * @param format output format. placeholders is [4 digit][3 digit][2 digit][2 digit]
 * @returns formatted mobile number or null on invalid input
 */
export function formatMobile(
    mobile: string,
    format: "($1) $2-$3$4"
): string | null {
    let raw = mobile.match(/\d+/g);
    let num = !!raw ? raw.join("") : "";
    return /\d{11}/.test(num)
        ? num.replace(/^(\d{4})(\d{3})(\d{2})(\d{2})$/, format)
        : null;
}

/**
 * format iranian national code
 *
 * @param nc national code string (10 digit). formatted input allowed
 * @param format output format. placeholders is [3 digit][6 digit][1 digit]
 * @returns formatted national code or null on invalid input
 */
export function formatNationalCode(
    nc: string,
    format: "$1-$2-$3"
): string | null {
    let raw = nc.match(/\d+/g);
    let num = !!raw ? raw.join("") : "";
    return /\d{10}/.test(num)
        ? num.replace(/^(\d{3})(\d{6})(\d{1})$/, format)
        : null;
}

/**
 * format iranian postal code
 *
 * @param pc postal code string (10 digit). formatted input allowed
 * @param format output format. placeholders is [5 digit][5 digit]
 * @returns formatted postal code or null on invalid input
 */
export function formatPostalCode(pc: string, format: "$1-$2"): string | null {
    let raw = pc.match(/\d+/g);
    let num = !!raw ? raw.join("") : "";
    return /\d{10}/.test(num) ? num.replace(/^(\d{5})(\d{5})$/, format) : null;
}

/**
 * format iranian tel
 *
 * @param tel tel string (11 digit). formatted input allowed
 * @param format output format. placeholders is [3 digit][2 digit][2 digit][2 digit][2 digit]
 * @returns formatted tel or null on invalid input
 */
export function formatTel(
    tel: string,
    format: "($1) $2$3-$4$5"
): string | null {
    let raw = tel.match(/\d+/g);
    let num = !!raw ? raw.join("") : "";
    return /\d{11}/.test(num)
        ? num.replace(/^(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})$/, format)
        : null;
}

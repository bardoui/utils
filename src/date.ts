import moment, { MomentInput, Moment } from "jalali-moment";

/**
 * get ago string of date in jalali
 *
 * @param date gregorian date
 * @returns ago string or null on invalid input
 */
export function jalaliAgo(date: MomentInput): string | null {
    moment.locale("en");
    let dt = moment(date);
    if (!dt.isValid()) {
        return null;
    }
    return dt.locale("fa").fromNow();
}

/**
 * get jalali date string from date
 *
 * @param date gregorian date
 * @param format output jalali format
 * @returns jalali date or null on invalid input
 */
export function jalali(
    date: MomentInput,
    format = "YYYY-MM-DD HH:mm:ss"
): string | null {
    moment.locale("en");
    let dt = moment(date);
    if (dt.isValid()) {
        return dt.locale("fa").format(format);
    }
    return null;
}

/**
 * get jalali month name
 *
 * @param month month number
 * @returns month name or null on invalid input
 */
export function jalaliMonth(month: number): string | null {
    const months: string[] = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
    ];
    return typeof months[month - 1] === "undefined" ? null : months[month - 1];
}

/**
 * get gregorian date from jalali date
 *
 * @param jalali jalali date
 * @returns moment object or null on fail
 */
export function gregorian(jalali: string): Moment | null {
    let d = moment.from(jalali, "fa");
    return d.isValid() ? d : null;
}

/**
 * get human friendly time in persian (FA)
 *
 * @param date date string
 * @returns wordified persian time or null
 */
export function wordifyTimeFa(date: string): string | null {
    let d = moment.from(date, "fa");
    if (d.isValid()) {
        const hours = d.hour();
        const mins = d.minute();
        const secs = d.second();
        let dateString = "";
        if (hours != 0) {
            dateString = `${hours} ساعت`;
        }
        if (mins != 0) {
            if (dateString != "") {
                dateString = `${dateString} و`;
            }
            dateString = `${dateString}${mins} دقیقه`;
        }
        if (secs != 0) {
            if (dateString != "") {
                dateString = `${dateString} و `;
            }
            dateString = `${dateString}${secs} ثانیه`;
        }
        return dateString;
    }
    return null;
}

/**
 * create date from seconds
 *
 * @param seconds seconds
 * @param obj determine functions must return date string or moment object
 * @returns date with seconds added to it
 */
export function dateFromSeconds(seconds: number, obj = false): Moment | string {
    let date = moment();
    date.set({ hours: 0, minutes: 0, seconds: 0 });
    date.add(seconds, "seconds");
    return obj ? date : date.format("YYYY-MM-DD HH:mm:ss");
}

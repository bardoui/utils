# Utils

Utility functions for different data types and operations.

## Installation

### CDN

This package published as `utils` module in umd.

```html
<script src="https://unpkg.com/@bardoui/utils"></script>
```

### NPM

```bash
npm i @bardoui/utils
```

## Date

### jalaliAgo

Get ago string of date in jalali.

### jalali

Get jalali date string from date.

### jalaliMonth

Get jalali month name.

### gregorian

Get gregorian date from jalali date string.

### wordifyTimeFa

Get human friendly time in persian (FA).

### dateFromSeconds

Create date from seconds.

## Formatters

### formatMobile

Format iranian mobile number.

```ts
import { formatMobile } from "@bardoui/utils";
formatMobile("(0912) 123-4567", "$1$2$3$4"); // 09121234567
formatMobile("09121234567", "($1) $2-$3$4"); // (0912) 123-4567
```

### formatNationalCode

Format iranian national code.

### formatPostalCode

Format iranian postal code.

### formatTel

Format iranian tel.

## Number

### prettyNum

Format number with comma separator and sign.

```ts
import { prettyNum } from "@bardoui/utils";
prettyNum(12345.456); // 12,345.45
prettyNum(12345.456, true, "0,0"); // +12,345
```

### extractNumber

Extract number from formatted string.

## String

### alter

Return alter for empty value.

### slugify

Make slugify string from strings. join multiple strings and remove spaces.

### mapper

Search for value in replacement object and return replacement if found, otherwise returns value itself.

**Note**: you can use \* key in replacement to define default value if no replacement is defined.

### truncate

Truncate string and add ... to end of string if string length bigger than truncate length.

### str

Convert value to string. if falsy value passed this function returns empty string.

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

### jMoment

Get moment js date from jalali date string.

### jMomentFrom

Get moment js date from jalali formatted date string.

### gregorian

Get gregorian date from jalali date string.

### gregorianFrom

Get gregorian date from jalali formatted date string.

### wordifyTimeFa

Get human friendly time in persian (FA).

### dateFromSeconds

Create date from seconds.

## Formatters

You can use [vMask](https://github.com/bardoui/vmask) library for advanced formatting.

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

### formatNumber

Format number with comma separator.

```ts
import { formatNumber } from "@bardoui/utils";
formatNumber("$ 12345.00002"); // $ 12,345.00002
formatNumber(12345.456, " "); // 12 345.345
```

### extractNumeric

Extract numeric character from string.

**Caution**: this function extract all numeric characters (`-`, `[0-9]`, `.`)/ for parsing number use `parseNumber` function.

```ts
import { extractNumeric } from "@bardoui/utils";
extractNumeric("$ 12345.00002"); // "12345.00002"
extractNumeric("Balance is : -32123.0001"); // "-32123.0001"
parseNumber("with none - string number ."); // "-."
```

### parseNumber

Parse number from string.

```ts
import { parseNumber } from "@bardoui/utils";
parseNumber("$ 12345.00002"); // 12345.00002
parseNumber("with none . string number -"); // NaN
```

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

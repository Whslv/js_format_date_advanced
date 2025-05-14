'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const splitDate = date.split(fromFormat[3]);
  const slFromFormat = fromFormat.slice(0, 3);
  const slToFormat = toFormat.slice(0, 3);
  const day = splitDate[slFromFormat.indexOf('DD')];
  const month = splitDate[slFromFormat.indexOf('MM')];
  const yearLong = splitDate[slFromFormat.indexOf('YYYY')];
  const yearShort = splitDate[slFromFormat.indexOf('YY')] || yearLong.slice(-2);
  const separator = toFormat[3];
  const dateParts = {
    DD: day,
    MM: month,
    YYYY: yearLong,
    YY: yearShort,
  };

  for (let i = 0; i < slToFormat.length; i++) {
    if (slToFormat[i] === 'YYYY' && Number(yearShort) < 30) {
      dateParts[slToFormat[i]] = '20' + yearShort;
    }

    if (slToFormat[i] === 'YYYY' && Number(yearShort) >= 30) {
      dateParts[slToFormat[i]] = '19' + yearShort;
    }
    slToFormat[i] = dateParts[slToFormat[i]];
  }

  return slToFormat.join(separator);
}

module.exports = formatDate;

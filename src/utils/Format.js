/* eslint-disable no-bitwise */

export function number (num, n = 0, def = '-') {
  if (typeof num !== 'number' || isNaN(num) || num === null || num === undefined) {
    return def
  }
  const re = `\\d(?=(\\d{3})+${n > 0 ? '\\D' : '$'})`
  return num.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,')
}

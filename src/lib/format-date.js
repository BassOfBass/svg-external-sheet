import { 
  format,
  minTime, 
  maxTime
} from "date-fns";

const defaultFormat = "do MMMM yyyy";

/**
 * @param {Date} date 
 * @param {string} dateFormat 
 * @returns 
 */
export function formatDate(date, dateFormat = defaultFormat) {
  return format(date, dateFormat);
}

/**
 * @param {number} time 
 * @returns {boolean}
 */
export function isAllowedTime(time) {
  return time <= maxTime && time >= minTime
}

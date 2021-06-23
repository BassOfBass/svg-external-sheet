import { nanoid } from "nanoid";

export { 
  formatISO as formatISODate, 
  parse as parseDate,
  parseISO as parseISODate
} from "date-fns";

export { formatDate, isAllowedTime } from "./format-date";

/**
 * @param {number} ms 
 * @returns {Promise<true>}
 */
export function asyncTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
};

export function nanoidHTML() {
  return `u${nanoid()}`;
}
import { format } from 'date-fns'

export default class Utils {
  static fmtDate(date, fmt) {
    return format(date, fmt)
  }
}

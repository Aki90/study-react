import { TDate, format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function formatAgo(date: TDate, lang = 'ko') {
  return format(date, lang);
}

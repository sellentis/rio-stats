import {DateTimeFormatOptions} from '@/interfaces';

export const hasErrors = (obj: {[key: string]: any}): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key].length > 0) {
      return true;
    }
  }
  return false;
};

export const dateFormat: DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour12: false,
};

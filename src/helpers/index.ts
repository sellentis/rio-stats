export const hasErrors = (obj: {[key: string]: any}): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key].length > 0) {
      return true;
    }
  }
  return false;
};

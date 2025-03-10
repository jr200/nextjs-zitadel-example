
export function flattenObject(obj, parentKey = '', res = {}) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];

      if (typeof value === 'function') {
        continue;
      }
      
      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // Recursively flatten if it's an object
        flattenObject(value, newKey, res);
      } else {
        // Otherwise, just assign the value
        res[newKey] = value;
      }
    }
  }
  return res;
}

/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function parse(str) {
  if (str === '' || str[0] === "'") {
    throw new Error();
  }

  if (str === '""') {
    return '';
  }

  if (str === 'null') {
    return null;
  }

  if (str === 'true' || str === 'false') {
    return str === 'true';
  }

  if (!isNaN(str)) {
    return Number(str);
  }

  if (str[0] === '"') {
    return String(str).slice(1, -1);
  }

  if (str === '[]') {
    return [];
  }

  if (str === '{}') {
    return {};
  }

  if (str[0] === '[') {
    return str.slice(1, -1).split(',').map((item) => parse(item));
  }

  if (str[0] === '{') {
    return str.slice(1, -1).split(',').reduce((acc, item) => {
      const i = item.indexOf(':');
      acc[parse(item.slice(0, i))] = parse(item.slice(i + 1));
      return acc;
    }, {});
  }

  return;
}

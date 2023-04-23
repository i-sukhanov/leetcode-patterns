/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const xStr = x.toString();

  let result = 0;

  if (xStr[0] === '-') {
    result = `-${xStr.slice(1).split('').reverse().join('')}`;
  } else if (xStr.at(-1) === 0) {
    result = `-${xStr.slice(0, -1)}`;
  } else {
    result = `${xStr.split('').reverse().join('')}`;
  }

  result = Number(result);

  if (result > 2 ** 31 || result < -(2 ** 31)) {
    return 0;
  }

  return result;
};

/**
 * @param {string} run The identifier
 * @returns {{
 *   numRUN: string;
 *   dv: string;
 * }} Returns the identifier with the dots and hyphens removed, with the RUN number and DV separated in an object.
 */
export function cleanAndSplitRUN(run) {
  const cleanRUN = run?.replace(/[\.\-]/g, '');
  let numRUN = '',
      dv = '';

  if (cleanRUN?.length === 1) {
    numRUN = cleanRUN;
  } else if (cleanRUN?.length > 1) {
    numRUN = cleanRUN.slice(0, -1);
    dv = cleanRUN.slice(-1).toUpperCase();
  }

  return { numRUN, dv };
}

/**
 * @param {string} run The identifier
 * @returns {string} Returns the identifier with the dots and hyphens removed.
 */
export function cleanRUN(run) {
  const { numRUN, dv } = cleanAndSplitRUN(run);
  return numRUN + dv;
}

/**
 * @param {string} run The identifier
 * @returns {boolean} Returns if the identifier is valid by checking it's DV.
 */
export function checkRUN(run) {
  const isNumber = /^\d+$/;
  const { numRUN, dv } = cleanAndSplitRUN(run);

  if (!(numRUN && dv && isNumber.test(numRUN))) return false;

  let calculation = 0,
      series = 2,
      validDV = '';

  for (let i = numRUN.length - 1; i >= 0; i--) {
    if (series > 7) series = 2;
    calculation += (series * Number(numRUN.charAt(i)));
    series++;
  }

  calculation = 11 - (calculation % 11);

  if (calculation === 10) {
    validDV = 'K';
  } else if (calculation === 11) {
    validDV = '0';
  } else {
    validDV = calculation.toString();
  }

  return dv === validDV;
}

/**
 * @param {string} run The identifier
 * @returns {string} Returns the identifier formatted with dots and the hyphen.
 */
export function formatRUN(run) {
  let { numRUN, dv } = cleanAndSplitRUN(run);
  let formattedRUN = '';

  while (numRUN.length > 3) {
    formattedRUN = '.' + numRUN.slice(numRUN.length - 3) + formattedRUN;
    numRUN = numRUN.slice(0, numRUN.length - 3);
  }

  formattedRUN = numRUN + formattedRUN;

  return (dv) ? `${formattedRUN}-${dv}` : formattedRUN;
}

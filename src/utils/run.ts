type RUN = {
  /**
   * The RUN number
   */
  numRUN: string;

  /**
   * The RUN verification digit
   */
  dv: string;
};

/**
 * @param run The identifier
 * @returns Returns the identifier with the dots and hyphens removed, with the RUN number and DV separated in an object.
 */
export function cleanAndSplitRUN(run: string): RUN {
  const cleanRUN = run?.replace(/[\.\-]/g, '');
  let numRUN: string = '';
  let dv: string = '';

  if (cleanRUN?.length === 1) {
    numRUN = cleanRUN;
  } else if (cleanRUN?.length > 1) {
    numRUN = cleanRUN.slice(0, -1);
    dv = cleanRUN.slice(-1).toUpperCase();
  }

  return { numRUN, dv };
}

/**
 * @param run The identifier
 * @returns Returns the identifier with the dots and hyphens removed.
 */
export function cleanRUN(run: string): string {
  const { numRUN, dv } = cleanAndSplitRUN(run);
  return numRUN + dv;
}

/**
 * @param run The identifier
 * @returns Returns if the identifier is valid by checking it's DV.
 */
export function checkRUN(run: string): boolean {
  const isNumber = /^\d+$/;
  const { numRUN, dv } = cleanAndSplitRUN(run);

  if (!(numRUN && dv && isNumber.test(numRUN))) return false;

  let calculation: number = 0;
  let series: number = 2;
  let validDV: string;

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
 * @param run The identifier
 * @returns Returns the identifier formatted with dots and the hyphen.
 */
export function formatRUN(run: string): string {
  const { numRUN, dv } = cleanAndSplitRUN(run);
  let numRUNCopy = numRUN;
  let formattedRUN = '';

  while (numRUNCopy.length > 3) {
    formattedRUN = '.' + numRUNCopy.slice(numRUNCopy.length - 3) + formattedRUN;
    numRUNCopy = numRUNCopy.slice(0, numRUNCopy.length - 3);
  }

  formattedRUN = numRUNCopy + formattedRUN;

  return (dv) ? `${formattedRUN}-${dv}` : formattedRUN;
}

// A utility function to print arrays with a label and formatted output
const isProd = process.env.NODE_ENV === 'production';  // You can override this manually for browser

export function printArray(label, arr) {
    if (isProd) return;

    const separator = '='.repeat(25);  // Decorative line
    const header = `>> ${label.toUpperCase()} <<`;

    console.log(`\n${separator}`);
    console.log(header);
    console.log(separator);

    if (!Array.isArray(arr)) {
        console.warn('The provided value is not an array.');
        console.log(arr);
    } else if (arr.length === 0) {
        console.log('[Empty Array]');
    } else {
        arr.forEach((item, index) => {
            console.log(`${index + 1}.`, item);
        });
    }

    console.log(separator); // Ending separator
}

/**
 * A simple one-liner value logger (label + value)
 */
export function log(label, value) {
    if (!isProd) {
        console.log(`[${label}]`, value);
    }
}

export function debugLog(label, value) {
  if (isProd) return;

  const separator = '='.repeat(50);
  const header = `>> ${label.toUpperCase()} <<`;

  console.log(`\n${separator}`);
  console.log(header);
  console.log(separator);

  if (Array.isArray(value)) {
    if (value.length === 0) {
      console.log('[Empty Array]');
    } else if (typeof value[0] === 'object' && value[0] !== null) {
      console.table(value); // Tabular view for arrays of objects
    } else {
      value.forEach((item, index) => {
        console.log(`${index + 1}.`, item);
      });
    }
  } else if (typeof value === 'object' && value !== null) {
    console.table ? console.table(value) : console.log(value);
  } else {
    console.log(value);
  }

  console.log(separator);
}


/*
export function printArray(label, arr) {
    console.log(`\n=== ${label} ===`);
    
    if (!Array.isArray(arr)) {
        console.warn('The provided value is not an array.');
        console.log(arr);
        return;
    }

    if (arr.length === 0) {
        console.log('[Empty Array]');
        return;
    }

    arr.forEach((item, index) => {
        console.log(`${index + 1}.`, item);
    });
}
*/


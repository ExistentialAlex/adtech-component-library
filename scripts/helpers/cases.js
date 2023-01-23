/**
 * 
 * @param  {string[]} strings Array of strings to combine.
 * @returns {string} The input strings, combined as PascalCase
 */
export const toPascalCase = (strings) => {
  return strings
    .map((s) => s.toLowerCase())
    .reduce(
      (acc, cur) => (acc = acc + cur[0].toUpperCase() + cur.substring(1)),
      ''
    );
};

/**
 *
 * @param  {string[]} strings Array of strings to combine.
 * @returns { string } The input string as kebab-case
 */
export const toKebabCase = (strings) =>
  strings.map((s) => s.toLowerCase()).join('-');

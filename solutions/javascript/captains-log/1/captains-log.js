// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return "NCC-" + Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.floor(Math.random() * (41999.0 - 41000.0 + 1)) + 41000.0;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const classes = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]
  console.log( classes[Math.floor(Math.random() * (classes.length-1 - 0 + 1)) + 0]);
  
  return classes[Math.floor(Math.random() * (classes.length-1 - 0 + 1)) + 0];
}


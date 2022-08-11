/**
 * @file index.js is the root file for counting bitmap holes
 * @author Sagar MAharjan
 * @see <a href="https://sagarmhrjn.github.io/sagarmaharjan69/">Sagar Maharjan</a>
 */

/**
 * Count bitmap holes
 * @property {Function} countBitmapHoles Count bitmap holes
 * @param {Array<string>} strArr - Input value
 * @returns {number} counter
 */
const countBitmapHoles = (strArr) => {
  /**
   * @param {Array<string[]>} twoDimensionMatrix
   * @param {number} counter
   * */
  const twoDimensionMatrix = construct2DMatrix(strArr);

  // Initialize counter of 5, counter can be any number except 0 and 1
  let counter = 5;

  for (let i = 0; i < twoDimensionMatrix.length; i++) {
    for (let j = 0; j < twoDimensionMatrix[i].length; j++) {
      // Check if element is zero in the 2d matrix
      if (twoDimensionMatrix[i][j] == "0") {
        // Search in all direction (left, right, up, down) and replace with counter
        searchHole(twoDimensionMatrix, i, j, counter);

        // Increment counter to replace new number to the new hole
        counter++;
      }
    }
  }
  return counter - 5; // Subtract the same number which is initialized at first
};

/**
 * Construct two dimensional matrix
 * @property {Function} construct2DMatrix Construct two dimensional matrix
 * @param {Array<string>} strArr - Input value
 * @returns {Array<string[]>} grid
 */
const construct2DMatrix = (strArr) => {
  let grid = [];
  for (let i = 0; i < strArr.length; i++) {
    grid.push(strArr[i].split(""));
  }
  return grid;
};

/**
 * Search hole and replace it with a new number if found
 * @property {Function} searchHole Search hole and replace it with a new number if found
 * @param {Array<string[]>} arr - Bitmap array
 * @param {number} i - Variable index from the first loop
 * @param {number} j - Variable index from the second loop
 * @param {number} num - Counter variable
 * @returns {void}
 */
const searchHole = (arr, i, j, num) => {
  /* Replace new number to the position */
  arr[i][j] = num;

  /** Replace the hole if left is zero and then search hole from then new position */
  if (arr[i][j - 1] == "0") {
    arr[i][j - 1] = num;
    searchHole(arr, i, j, num);
  }

  /** Replace the hole if right is zero and then search hole from then new position */
  if (arr[i][j + 1] == "0") {
    arr[i][j + 1] = num;
    searchHole(arr, i, j + 1, num);
  }

  /** Replace the hole if up is zero and defined and then search hole from then new position */
  if (arr[i - 1] != undefined && arr[i - 1][j] == "0") {
    arr[i - 1][j] = num;
    searchHole(arr, i - 1, j, num);
  }

  /** Replace the hole if down is zero and defined and then search hole from then new position */
  if (arr[i + 1] != undefined && arr[i + 1][j] == "0") {
    arr[i + 1][j] = num;
    searchHole(arr, i + 1, j, num);
  }
  return;
};

console.log(
  `Input: ["10111", "10101", "11101", "11111"]
=> Output: ${countBitmapHoles(["10111", "10101", "11101", "11111"])}`
);

console.log(`Input: ["1011", "0010"] 
=> Output: ${countBitmapHoles(["1011", "0010"])}`);

console.log(
  `Input: ["01111", "01101", "00011", "11110"] 
=> Output: ${countBitmapHoles(["01111", "01101", "00011", "11110"])}`
);

// document.querySelector(
//   "#sample1"
// ).innerHTML = `Input: ["10111", "10101", "11101", "11111"] <br/>
//   => Output: ${countBitmapHoles(["10111", "10101", "11101", "11111"])}
//   `;

// document.querySelector("#sample2").innerHTML = `Input: ["1011", "0010"] <br/>
// => Output: ${countBitmapHoles(["1011", "0010"])}`;

// document.querySelector(
//   "#sample3"
// ).innerHTML = `["01111", "01101", "00011", "11110"] <br/> => Output: ${countBitmapHoles(
//   ["01111", "01101", "00011", "11110"]
// )}`;

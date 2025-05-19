/**
 * @param {number[][]} twoDArrayImage
 * @param {number} startRowIndex
 * @param {number} startColumnIndex
 * @param {number} targetColorNumber
 * @return {number[][]}
 */

// takes 4 parameters
const paintFill = (twoDArrayImage, startRowIndex, startColumnIndex, targetColorNumber) => {

  // start by storing the original 'pixel's number
  const originalPixelNumber = twoDArrayImage[startRowIndex][startColumnIndex];

  // check edgecase for when the originalPixelNumber === targetColorNumber
  // cause if that's the case, then there's no changes needed to be done to the original image
  if (originalPixelNumber === targetColorNumber) return twoDArrayImage;

  // i guess it's useful to store the length and width of the 2D array
  // since 'nested' arrays are considered 'grids' in programming
  // it's good idea to store useful values that're critical to solving the problem
  const imageHeight = image.length;
  const imageWidth = image[0].length;

  // recursion
  const recursiveAdjacentPixelFill = (sr, sc) => {
    // check the several edgecases to stop the recursion
    // the edgecases would be when the recursive shift down/up, left/right
    // goes out of bounds, then i need to stop the recursion
  };
  // base case
  // action step
  // recursive call

  // invoke the recursive function with the startRowIndex & startColIndex
  recursiveAdjacentPixelFill(startRowIndex, startColumnIndex);
  // return original image
  return twoDArrayImage;
}
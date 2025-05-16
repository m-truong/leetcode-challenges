/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

  // the grid[][] is the image
  // ex: image[i][j] is the pixel value
  // ex: m by n grid

  // sr & sc are both given as parameters in the function itself
  // essentially starting from sr (JS integer)
  // sr = start row
  // sc = start column

  // goal:
  // basically, swap out the 'pixel' number w the target 'color' number primitive
  // take the sr/sc as the 'index' inside the 2D array

  // approach:
  // if the initial 'pixel' primitive number is different from the 'color' primitive number, then change it
  // if it's the same, then there's no work to be done for the function

  // if the 'pixel' IS different from the 'color' primitive, then enter MEAT of flood fill algorithm
  // first swap the initial 'pixel'
  // then check the elements before/after the initial 'pixel'
  // if they're the SAME as the initial pixel, then SWITCH the primitive

  // then ...

  // start from within and 
};
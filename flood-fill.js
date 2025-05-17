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

// start from within and ...

// edgecases: 
// minimum 1 row and 1 column (i.e. [[1]])
// max # rows and columns is 50
// the actual primitives can be 0 -> 2^16 (but +positive integers)
// 0 <= sr, sc < imageHeight, imageWidth
// so the passed inputs sr/sc are separate/independent from the image[][]
// sr, sc must be within the 0-based index of the 2D array image[][]

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  // store initial pixel number using the indices src/sc
  // practice: storing a Value that is important to the algo!
  const originalColorPrimitive = image[sr][sc];

  // then check for edgecase if the original color is the same as the target color; and if it is, then just return the same image
  // practice: using one line if-statement
  if (originalColorPrimitive === color) return image;

  // store the important values like the total rows/columns of grid
  // note: it's possible to call .length even on a 2D array
  // imageHeight should be the number of 'nested' arrays (i.e. rows)
  const imageHeight = image.length;

  // imageWidth should be the number of elements WITHIN a 'nested' array
  // this is essentially the 'width' of the image (i.e. columns)
  const imageWidth = image[0].length;

  function dfs(r, c) {
    // base case (which includes edgecases)
    // when row & column numbers are out of bounds
    if (
      r < 0 || r >= imageHeight ||
      c < 0 || c >= imageWidth ||
      image[r][c] !== originalColorPrimitive
    ) return;

    // action step
    image[r][c] = color;

    // 4 recursive calls
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }

  dfs(sr, sc);
  return image;
};
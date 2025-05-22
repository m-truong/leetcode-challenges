// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// approach:
// each land cell w value 1 that is adjacent vertically/horizontally to 0 counts towards island perimeter sum
// grid cell scenarios that sum towards perimeter:
// 1) any 1's at the first/last index of outer array cause it touches the surrounding water
// 2) any 1's in-between first/last index of outer array that are at beginning/end of inner array cause it touches the surrounding water
// 3) any 1's touching 0's left/right is a perimeter side
// 4) any 1's touching 0' above/below is a perimeter side

// constraints:
// shape of grid is rectangular (which means grid.length doesn't have to equal grid[i].length)
// e.g. [[1,0], [1,0], [1,0]] ==> example of rectangular shape
// e.g. [[0,1,0]] ===> another rectangle
// there's only one contiguous connected island
// minimum of 1 row and col
// grid[i][j] is 0 or 1

// Hints:
// If the next cell is out of boundary or water, then increase the perimeter by 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */

const islandPerimeter = (grid) => {
    // store perimeter
    let perimeter; // undefined since declared but not initialized
    console.log('printing'. perimeter);

    // store important variables
    const islandWidth = grid[0].length; // get inner array
    const islandHeight = grid.length; // store outer array length
    console.log('printing', islandWidth, islandHeight);

    // store variables for rowIndex and colIndex
    let rowIndex = 0;
    let colIndex = 0;

    // enter recursion, breaking into subroutines to traverse grid vertically/horizontally
    const gridTraversal = (row, column) => {
        // base case:
        // requires checking if grid cell is land or water?
        // if out of bounds, end recursion
        if (row < 0 ||
            row >= islandWidth ||
            column < 0 ||
            column >= islandHeight
        ) return;

        // action step:
        // 1) any 1's at the first/last index of outer array cause it touches the surrounding water
        // if cell value is 1 && rowIndex === 0, then increment the perimeter
        // 2) any 1's in-between first/last index of outer array that are at beginning/end of inner array cause it touches the surrounding water
        // 3) any 1's touching 0's left/right is a perimeter side
        // 4) any 1's touching 0' above/below is a perimeter side
        // now use the row/column indices passed as props to access the grid cells!


        // traversal recursive calls:
        // *** very unique back2back function calls ***
        gridTraversal(row + 1, column); // down
        gridTraversal(row - 1, column); // up
        gridTraversal(row, column - 1); // left
        gridTraversal(row, column + 1); // right

    };

    // Start
    gridTraversal(rowIndex, colIndex);

    // Output
    return perimeter;
};
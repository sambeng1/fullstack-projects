// PUZZLES

let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzleCopy = [[ 8,9,5,   7,4,2,   1,3,6 ],
                  [ 2,7,1,   9,6,3,   4,8,5 ],
                  [ 4,6,3,   5,8,1,   7,9,2 ],

                  [ 9,3,4,   6,1,7,   2,5,8 ],
                  [ 5,1,7,   2,3,8,   9,6,4 ],
                  [ 6,8,2,   4,5,9,   3,7,1 ],

                  [ 1,5,9,   8,7,4,   6,2,3 ],
                  [ 7,4,6,   3,2,5,   8,1,9 ],
                  [ 3,2,8,   1,9,6,   5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];              


// FUNCTIONS DOWN HERE

// getRow = This function accepts two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function returns an array containing the numbers in the specified row.

function getRow(grid,rowIdx){

  let row = grid[rowIdx]
      return row;
      
}

// getColumn = This function accepts a sudoku grid and a column index. The function returns an array containing the numbers in the specified column.

function getColumn(grid,colIdx){

  let column = [];
  for (let i = 0; i < grid.length; i++){
    let curColumn = grid[i];
    column.push(curColumn[colIdx]);
 
  }
 return column;

}

// getSection =  This function accepts three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function returns an array with all the numbers in the specified subgrid.

function getSection(grid,xCoor,yCoor){
  let section = [];
  let start = 0;
  let end = 3;

  if (yCoor === 1){
    start = 3;
    end = 6;
  }
  if (yCoor === 2){
    start = 6;
    end = 9;
  }

  for (let i = start; i < end; i++){
    let curRow = grid[i];
    if (xCoor === 0){
      section.push(curRow[0],curRow[1],curRow[2]);
    }
    if (xCoor === 1){
      section.push(curRow[3],curRow[4],curRow[5]);
    }
    if (xCoor === 2){
      section.push(curRow[6],curRow[7],curRow[8]);
    }

  }
  return section;

}

// includes1to9 = A function that will accept a subsection and check that it includes the numbers 1-9 (with no repeats). 

function includes1to9(numArray){

  for(let i=1; i < numArray.length; i++){
    if(numArray.indexOf(i) === -1 ){
      return false;
    }
  }

  let finalNumArray = [];

  for (let i = 0; i < numArray.length; i++){
    let curNum = numArray[i];
    if (finalNumArray.includes(curNum)){
      return false;
    }
    if (!finalNumArray.includes(curNum)){
      finalNumArray.push(curNum);
    }

 }
 return true;
}

// sudokuIsValid = A function combining all of the previous functions, so it can check each row/column/subsection for the numbers 1-9 (and to check for duplicates). If the sudoku is correct, the function will return true. Otherwise, it will return false.

function sudokuIsValid(soduku){
  let grid = soduku;
  for (let i = 0; i < 9; i++){
    if ((!includes1to9(getRow(grid,i))) == true){
      return false;
    }
    if ((!includes1to9(getColumn(grid,i))) == true){
      return false;
    }
  }
  for (let i = 0; i < 2; i++){
    if ((!includes1to9(getSection(grid,i,0))) == true){
      return false;
    }
    if ((!includes1to9(getSection(grid,i,1))) == true){
      return false;
    }
    if ((!includes1to9(getSection(grid,i,2))) == true){
      return false;
    }
  }
  return true;
}

// isSame = This function checks to see if the two sodokus (represented as an array of arrays) are exactly the same. If they are the same, this function will return true. Otherwise, it will return false.

function isSame(grid1,grid2){
  if (grid1.length !== grid2.length){
    return false;
  }
  for (let i = 0; i < grid1.length; i++){
     let curArray1 = grid1[i];
     let curArray2 = grid2[i];
    for (let j = 0; j < 9; j++){
      if (curArray1[j] !== curArray2[j]){
        return false;
      }
    } 
  }
  return true;
}

console.log(sudokuIsValid(puzzle));
console.log(sudokuIsValid(p8zzle));
console.log(isSame(puzzle,puzzleCopy));
console.log(isSame(puzzle,p8zzle));
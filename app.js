document.addEventListener('DOMContentLoaded', function(){
  // Add code here
  const board = document.getElementById('board');
  const gridRow = prompt("How Many Rows?");
  const gridCol = prompt("How Many Columns");

  for (var i = 0; i<gridRow;i++){
    const newLine = document.createElement('div');
    newLine.setAttribute('class','row');
    board.appendChild(newLine);
    for (var j = 0; j< gridCol;j++){
      const test = document.createElement('div');
      test.setAttribute('class','col');
      newLine.appendChild(test);
    }
  }


  // Create Elements
  // loop for row
  // loop for col
  // create element
  //

});

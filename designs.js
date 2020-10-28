//makeGrid() function:
//A table is formed with the given height and width values from the user form.
// Selected Cell is painted with the value taken form color picker

document.getElementById('sizePicker').onsubmit = function() {
    event.preventDefault();
    makeGrid();
};

function makeGrid() {
  //We define our variables
  //Which will be used as height and width parameters for the canvas
  const CanvasHeight = document.getElementById('inputHeight').value;
  const CanvasWidth = document.getElementById('inputWidth').value;
  const PixelCanvas = document.getElementById('pixelCanvas');
  PixelCanvas.innerHTML = '';
  const TableBody = document.createElement('tbody');
  for (let i = 0; i < CanvasHeight; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < CanvasWidth; j++) {
          const td = document.createElement('td');
          tr.appendChild(td);
      }
      TableBody.appendChild(tr);
  }
  PixelCanvas.appendChild(TableBody);

//We catch user click and that cell is painted
//with the data from color picker
const PaintCell = PixelCanvas.getElementsByTagName('td');
for (let x = 0; x < PaintCell.length; x++) {
    PaintCell[x].addEventListener("click", function(event) {
        let SelectCell = event.target;
        const color = document.getElementById("colorPicker").value;
        SelectCell.style.backgroundColor = color;
    });
  }

// and prevent  right click to interupt our coloring

PixelCanvas.addEventListener('contextmenu', function(event){
    event.preventDefault();
  });
}

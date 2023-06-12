const panda = document.querySelector(".cutePanda");
const squares = document.querySelectorAll(".square");
const info = document.getElementById("info");

panda.addEventListener("drag", dragging);
panda.addEventListener("dragstart", dragStart);

squares.forEach((square) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("dragenter", dragEnter);
  square.addEventListener("dragleave", dragLeave);
  square.addEventListener("drop", dragDrop);
  square.addEventListener("dragend", dragEnd);
});

let beingDragged;

function dragging() {
  info.textContent = "You are dragging a super cute " + beingDragged.id;
}

function dragStart(e) {
  beingDragged = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.target.classList.add("highlight");
}

function dragLeave(e) {
  e.target.classList.remove("highlight");
}

function dragDrop(e) {
  e.target.append(beingDragged);
  e.target.classList.remove("highlight");
}
function dragEnd(e) {
  e.target.classList.add("target");
  setTimeout(() => e.target.classList.remove("target"), 200);
}

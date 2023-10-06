const fill  = document.querySelector('.fill');
const emptyList = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

emptyList.forEach((empty) =>{
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

function dragStart(){
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd(){
    this.classList.remove('boxHover');
    this.classList.remove('invisible');
    this.classList.add('fill');
}

function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
    this.classList.add('boxHover');
}
function dragLeave(){
    this.classList.remove('boxHover');
}

function dragDrop(){
    this.classList.remove('boxHover');
    this.appendChild(fill);
}


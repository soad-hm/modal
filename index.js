// display=none
//filter=blur
let $ = document
const box=$.querySelector('button')
const modal=$.querySelector('.modal-parent')
const icon=$.querySelector('.X')
const section=$.querySelector('section')
function F(){
    modal.style.display='block'
    //دورش سفید نشودبرای اینکه دکمهesc را میزنیم 
    section.style.filter='blur(10px)'
    box.blur()
}
function f(){
    modal.style.display='none'
    section.style.filter='blur(0px)'
}

function hide(event){
    if(event.KeyCode===27){
        modal.style.display='none'
        section.style.filter='blur(0px)'

    }

}

box.addEventListener('click',F)
icon.addEventListener('click',f)
document.body.addEventListener('keyup',hide)
